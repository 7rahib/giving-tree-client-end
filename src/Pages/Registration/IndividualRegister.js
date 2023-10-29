import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useIndividualToken from '../../hooks/useIndividualToken';
import Loading from '../Shared/Loading';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const IndividualRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [eye, setEye] = useState(true);
    const [password, setpassword] = useState("password");

    let signInError;
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    };

    const handleSocialLogin = async () => {
        await signInWithGoogle();
    }

    const [individualToken] = useIndividualToken(user || googleUser)

    useEffect(() => {
        if (individualToken) {
            navigate('/emergency');
        }
    }, [individualToken, navigate, from])

    if (error || googleError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    const showPassword = () => {
        if (password === "password") {
            setpassword("text");
            setEye(false);
        }
        else {
            setpassword("password");
            setEye(true);
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Create An Individual Account</h1>
                        <p className="text-gray-500">Register as an individual</p>
                    </div>
                    <div className="m-6">
                        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label for="name" className="block mb-2 text-sm text-gray-700">Full Name <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    name="name" placeholder="Enter your full name"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-700">Email Address <span className='text-red-500'>*</span></label>
                                <input
                                    type="email" name="email" placeholder="Your email address"
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
                                <span className='flex flex-col mb-2'>
                                    <label for="password" className="text-sm text-gray-700">Password <span className='text-red-500'>*</span></label>
                                    <label for="password" className="text-xs text-gray-700">Minimum eight characters (One capital, small letter, special character and number)</label>
                                </span>
                                <span className='w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 flex items-center justify-end'>
                                    <input
                                        type={password} placeholder="Your password" name="password"
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
                                <label for="cpassword" className="text-sm text-gray-700">Confirm Password <span className='text-red-500'>*</span></label>
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
                            <div className='mb-2'>
                                <input type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Sign Up"></input>
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
                            <button onClick={handleSocialLogin} className="font-semibold text-gray-500 w-full px-3 py-2 flex flex-row border border-gray-300 justify-center items-center rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 hover:bg-blue-100 duration-100 ease-in-out">
                                <span className='flex items-center'><FcGoogle className='mr-2' /> Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default IndividualRegister;