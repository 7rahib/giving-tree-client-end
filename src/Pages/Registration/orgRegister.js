import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useOrgToken from '../../hooks/useOrgToken';

const OrgRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;
    const { register, formState: { errors }, handleSubmit } = useForm();
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
    return (
        <div>
            <div class="flex justify-center">
                <div class="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
                    <div class="text-center my-6">
                        <h1 class="text-3xl font-semibold text-gray-700">Create An Organization Account</h1>
                        <p class="text-gray-500">Register as an organization</p>
                    </div>
                    {/* Name */}
                    <div class="m-6">
                        <form class="mb-2" onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-700">Email Address</label>
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
                                <label for="password" class="text-sm text-gray-700">Password</label>
                                <input
                                    type="password" placeholder="Password" name="password"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <div class="mb-1">
                                <input type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Create Account"></input>
                            </div>
                            <p class="text-sm text-center text-gray-400">
                                Already have an account?
                                <Link to='/login' class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Login</Link>.
                            </p>
                        </form>
                        <div class="flex flex-row justify-center mb-8">
                            <span class="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                            <div class="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>
                        <div class="flex flex-row gap-2">
                            <button onClick={handleSocialLogin} class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                                Google
                            </button>
                            <button class="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
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