import React from "react";
import InputBox from "./Input";
import Button from "./Button";
import { useState } from "react";

const LoginUser = ({ switchForm }) => {
  return (
    <div className=" h-full w-full lg:p-10  flex justify-center ">
      <div className="lg:flex justify-between rounded-xl gap-4 items-center w-full h-full  lg:p-10 bg-linear-to-b from-[#FFFDF9] to-[#FFF7E8]">
        {/* Left panel*/}
        <div className=" lg:flex w-1/2 p-4 flex-col justify-between hidden relative overflow-hidden">
          {/* Heading */}
          <div className="">
            <h1 className="text-3xl font-bold text-[#1E2A26]">Welcome Back</h1>
            <h2 className="text-4xl font-serif text-[#163A36] mt-2 leading-tight coustard-h1">
              Join Our Community of
            </h2>

            <h2 className=" mt-4 text-3xl font-serif text-[#D97706] leading-tight coustard-h1">
              Trusted Astrologers
            </h2>

            <p className="mt-4 text-[#5C6A66] text-lg leading-6">
              Create your profile and help thousands of seekers find clarity,
              guidance and peace of mind.
            </p>
          </div>

          {/* Zodiac Wheel */}
        </div>

        {/* Right panel */}
        <div className="bg-white rounded-3xl shadow-lg border border-[#EAE6DD] px-8 ">
          <form className="">
            <InputBox
              LabelName="Contact Number"
              Placeholder="Enter your contact number"
              Name="contactNumber"
              Type="text"
            />

            {/* Password */}

            <InputBox
              Name="password"
              LabelName="Password"
              Placeholder="Enter your password"
              Type="password"
              PasswordIndication={true}
            />

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
          {/* <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>

            <span className="px-4 text-sm text-[#8B948F]">OR</span>

            <div className="flex-1 border-t border-gray-200"></div>
          </div> */}

          {/* Social Login */}
          {/* <Button
            Label="Continue with Google"
            variant="outline"
            className="w-full py-3 mb-4"
          /> */}

          {/* Signup */}
          <p className="flex justify-end items-end gap-2  text-[#5C6A66] p-6">
            Don't have an account?{" "}
            <button
              onClick={switchForm}
              className="capitalize hover:text-blue-600 hover:underline cursor-pointer "
            >
              register here
            </button>
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
