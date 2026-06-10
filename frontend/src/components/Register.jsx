import React from "react";
import InputBox from "./Input";
import Button from "./Button";
import { useState } from "react";

function Register() {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  

  const InputFeildData = [
    {
      LabelName: "John Doe",
      Placeholder: "Username",
      Type: "text",
    },
    {
      LabelName: "Contact No.",
      Placeholder: "+91 1234567890",
      Type: "text",
    },
    {
      LabelName: "Email",
      Placeholder: "johndoe@gmail.com",
      Type: "text",
    },
    {
      LabelName: "Password",
      Placeholder: "********",
      Type: "text",
    },
  ];

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log("Sign Up Clicked");

    setShowOTP(true);
  };

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
    // For demonstration, we'll just hide the OTP input after verification
    e.preventDefault();
    console.log("OTP Verified");
    setShowOtp(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">🌙</div>

        <h1 className="text-3xl font-bold text-[#1E2A26]">Welcome Back</h1>

        <p className="text-[#5C6A66] mt-2">
          Register in to access your zodiac insights
        </p>
      </div>

      {/* SignUp */}
      <div className=" w-[50%] bg-white rounded-3xl shadow-lg border border-[#EAE6DD] px-8 ">
        <form className="grid grid-cols-2 gap-4  py-4">
          {InputFeildData.map((data, index) => (
            <InputBox
              key={index}
              LabelName={data.LabelName}
              Placeholder={data.Placeholder}
              Type={data.Type}
            />
          ))}
          {showOtp && (
            <div className="md:col-span-2">
              <InputBox
                LabelName="OTP Verification"
                Placeholder="Enter 6-digit OTP"
                Type="text"
                Value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
          <div className="md:col-span-2">
            <Button
              Label={showOtp ? "Verify OTP" : "Sign Up"}
              onClick={showOtp ? handleVerifyOTP : handleSignUp}
              className="w-full"
            />
          </div>
          {/* <Button Label="SignUp" className="w-full col-span-2 " /> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
