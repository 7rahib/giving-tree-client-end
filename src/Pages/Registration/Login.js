import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  console.log(user);

  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="flex justify-center max-h-screen">
        <div class="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
          <div class="text-center my-6">
            <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
            <p class="text-gray-500">Sign in to access your account</p>
          </div>
          <div class="m-6">
            <form class="mb-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-700">
                  Email Address
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
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-700">
                    Password
                  </label>
                  <a
                    href="#!"
                    class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
              <div class="mb-2">
                <input
                  type="submit"
                  class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                  value="Log In"
                ></input>
              </div>
              <p class="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <Link
                  to="/register"
                  class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                >
                  {" "}
                  Sign up
                </Link>
                .
              </p>
            </form>
            <div class="flex flex-row justify-center mb-8">
              <span class="absolute bg-white px-4 text-gray-500">
                or sign-in with
              </span>
              <div class="w-full bg-gray-200 mt-3 h-px"></div>
            </div>
            <div class="flex flex-row gap-2">
              <button class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
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

export default Login;
