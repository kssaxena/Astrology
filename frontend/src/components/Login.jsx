import React from "react";
import InputBox from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🌙</div>

          <h1 className="text-3xl font-bold text-[#1E2A26]">Welcome Back</h1>

          <p className="text-[#5C6A66] mt-2">
            Sign in to access your zodiac insights
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-[#EAE6DD] px-8 ">
          <form className="">
            {/* Email */}
            <div>
              <InputBox LabelName="Email" Placeholder="Email" />
            </div>

            {/* Password */}
            <div>
              <InputBox
                LabelName="Password"
                Placeholder="Password"
                Type="password"
                PasswordIndication={true}
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#5C6A66]">
                <input type="checkbox" className="accent-[#1E2A26]" />
                Remember me
              </label>

              <a href="#" className="text-[#1E2A26] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <Button Label="Login" className="w-full py-3 mt-4" />
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>

            <span className="px-4 text-sm text-[#8B948F]">OR</span>

            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Login */}
          <Button
            Label="Continue with Google"
            variant="outline"
            className="w-full py-3 mb-4"
          />

          {/* Signup */}
          <p className="text-center mt-6 text-[#5C6A66] mb-4">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#1E2A26] font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
