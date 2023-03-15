import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const [eye, setEye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false)


  let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, googleLoading, googleUser, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleSocialLogin = async () => {
    await signInWithGoogle();
  }

  const [token] = useToken(user || googleUser)

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }

  if (loading) {
    return <Loading></Loading>;
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
      <div className="flex justify-center max-h-screen">
        <div className="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
          <div className="text-center my-6">
            <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
            <p className="text-gray-500">Sign in to access your account</p>
          </div>
          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label for="email" className="block mb-2 text-sm text-gray-700">
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm text-gray-700">
                    Password <span className='text-red-500'>*</span>
                  </label>
                </div>
                <span className='w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 flex items-center justify-end'>
                  <input
                    type={password}
                    name="password"
                    placeholder="Your password"
                    className="w-full placeholder-gray-500"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                        message:
                          "Minimum eight characters, at least one letter and one number",
                      },
                    })}
                  />
                  {eye ? <FiEye onClick={showPassword} /> : <FiEyeOff onClick={showPassword} />}
                </span>
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <div className="mb-2">
                <input
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                  value="Log In"
                ></input>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <Link
                  to="/register"
                  className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                >
                  {" "}
                  Sign up
                </Link>
                .
              </p>
            </form>
            <div className="flex flex-row justify-center mb-8">
              <span className="absolute bg-white px-4 text-gray-500">
                or sign-in with
              </span>
              <div className="w-full bg-gray-200 mt-3 h-px"></div>
            </div>
            <div className="flex flex-row gap-2">
              <button onClick={handleSocialLogin} className="font-semibold text-gray-500 w-full px-3 py-2 flex flex-row border border-gray-300 justify-center items-center rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 hover:bg-blue-100 duration-100 ease-in-out">
                <span className='flex items-center'><FcGoogle className='mr-2' /> Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
