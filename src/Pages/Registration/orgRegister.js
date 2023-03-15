import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useOrgToken from '../../hooks/useOrgToken';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const OrgRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    const [eye, setEye] = useState(true);
    const [password, setpassword] = useState("password");
    const [type, settype] = useState(false);


    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
    };

    const handleSocialLogin = async () => {
        await signInWithGoogle();
        navigate('/OrgProfile');
    }

    const [orgToken] = useOrgToken(user || googleUser)

    useEffect(() => {
        if (orgToken) {
            navigate(from, { replace: true });
        }
    }, [orgToken, navigate, from])

    if (error || googleError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }


    const showPassword = () => {
        if (password === "password") {
            setpassword("text");
            setEye(false);
            settype(true);
        }
        else {
            setpassword("password");
            setEye(true);
            settype(false);
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Create An Organisation Account</h1>
                        <p className="text-gray-500">Register as an organisation</p>
                    </div>
                    {/* Name */}
                    <div className="m-6">
                        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-700">Email Address</label>
                                <input
                                    type="email" name="email" placeholder="Email address"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label for="password" className="text-sm text-gray-700">Password</label>
                                <span className='w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 flex items-center justify-end'>
                                    <input
                                        type={password} placeholder="Password" name="password"
                                        className="w-full placeholder-gray-500"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                                message: 'Minimum eight characters, at least one letter and one number'
                                            }
                                        })}
                                    />

                                    {eye ? <FiEye onClick={showPassword} /> : <FiEyeOff onClick={showPassword} />}
                                </span>

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label for="cpassword" className="text-sm text-gray-700">Confirm Password</label>
                                <span className='w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 flex items-center justify-end'>
                                    <input
                                        type={password} placeholder="Retype your password" name="cpassword"
                                        className="w-full placeholder-gray-500"
                                        {...register("cpassword", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                                message: 'Minimum eight characters, at least one letter and one number'
                                            },
                                            validate: (val) => {
                                                if (watch('password') !== val) {
                                                    return "Your passwords do no match";
                                                }
                                            }
                                        })}
                                    />
                                    {eye ? <FiEye onClick={showPassword} /> : <FiEyeOff onClick={showPassword} />}
                                </span>
                                <label className="label">
                                    {errors.cpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cpassword.message}</span>}
                                    {errors.cpassword?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.cpassword.message}</span>}
                                    {errors.cpassword?.type === 'validate' && <span className="label-text-alt text-red-500">{errors.cpassword.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <div className="mb-1">
                                <input type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Create Account"></input>
                            </div>
                            <p className="text-sm text-center text-gray-400">
                                Already have an account?
                                <Link to='/login' className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Login</Link>.
                            </p>
                        </form>
                        <div className="flex flex-row justify-center mb-8">
                            <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                            <div className="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <button onClick={handleSocialLogin} className="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                                Google
                            </button>
                            <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgRegister;