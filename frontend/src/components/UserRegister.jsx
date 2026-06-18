import InputBox from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Logo from "../assets/Logo.png";

export const RegisterUser = ({ UpdateProfile = false, switchForm }) => {
  const formRef = useRef();
  const [otp, setOtp] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [certificate, setCertificate] = useState();
  // const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // startLoading()
      const formData = new FormData(formRef.current);

      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      //   const response = await FetchData("/", "post", formData);
      //   console.log(response);
      //   if (response.data.data.otp) {
      //       alert("Otp sent successfully!");
      //     }
      setOtp(true);
    } catch (err) {
      console.log(err);
    } finally {
      //   stopLoading();
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      // startLoading()
      // const formData = new FormData(formRef.current);
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }
      //   const response = await FetchData("/", "post", formData);
      //   console.log(response);
      //   if (response.data.data.otp) {
      //       alert("Otp sent successfully!");
      //     }
      //   setOtp(true);
    } catch (err) {
      console.log(err);
    } finally {
      //   stopLoading();
    }
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image file must be less than 5 MB");
      e.target.value = "";
      return;
    }

    if (file) {
      setProfileImage({
        file: file,

        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleCertificate = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Certificate file must be less than 5 MB");
      e.target.value = "";
      return;
    }

    if (file) {
      setCertificate({
        file: file,

        preview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className=" h-full w-full lg:p-10  flex justify-center">
      <div className="lg:flex justify-between items-center w-full h-full  lg:p-10 bg-linear-to-b from-[#FFFDF9] to-[#FFF7E8]">
        {/* Left panel */}
        {UpdateProfile === false ? (
          <div className=" lg:flex w-1/2 p-4 flex-col justify-between hidden relative overflow-hidden">
            {/* Heading */}
            <div className="">
              <h2 className="text-4xl font-serif text-[#163A36] leading-tight coustard-h1">
                Join Our Community of
              </h2>

              <h2 className="text-3xl font-serif text-[#D97706] leading-tight mt-2 coustard-h1">
                Trusted Astrologers
              </h2>

              <p className="mt-4 text-[#5C6A66] text-lg leading-10">
                Create your profile and help thousands of seekers find clarity,
                guidance and peace of mind.
              </p>
            </div>

            {/* Zodiac Wheel */}
            <div className="flex justify-center w-full h-full ">
              <img src={Logo} alt="Astrology Wheel" className="object-cover" />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Right Panel */}
        <div className=" h-full  w-full bg-white/80 rounded-xl lg:px-12  shadow-xl border border-white/50 ">
          {UpdateProfile === false ? (
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <button
                  onClick={switchForm}
                  className="flex items-center gap-2 capitalize hover:text-blue-600 hover:underline cursor-pointer "
                >
                  <FaArrowLeft />
                  Back
                </button>

                <div className="flex justify-end items-end gap-2">
                  <p className="  text-[#5C6A66]">
                    Already Have an account?{" "}
                  </p>
                  <button
                    onClick={switchForm}
                    className="capitalize hover:text-blue-600 hover:underline cursor-pointer "
                  >
                    Login here
                  </button>
                </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold coustard-h1 text-[#1E2A26]">
                Create Your Professional Profile
              </h2>

              <p className="mt-2 text-[#667085] max-w-2xl">
                Join our growing network of trusted astrologers and connect with
                thousands of seekers looking for guidance, clarity, and
                personalized consultations.
              </p>
            </div>
          ) : (
            <div className="p-6 text-center ">
              <h2 className="text-3xl font-bold text-[#1E2A26] coustard-h1">
                Update your profile
              </h2>

              <p className="text-[#5C6A66] mt-2 ">
                Share your knowledge. Inspire lives.
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleRegister} className="p-2">
            {/* register div  */}
            {UpdateProfile === false ? (
              <div className="">
                {otp === false ? (
                  <div className="grid grid-cols-2 gap-4 px-6">
                    <InputBox
                      Name="name"
                      Placeholder="Enter your name"
                      LabelName="Full Name"
                      Type="text"
                    />
                    <InputBox
                      Name="contactNumber"
                      Placeholder="Enter your contact number"
                      LabelName="Contact number"
                      Type="text"
                    />
                    <InputBox
                      Name="password"
                      Placeholder="Password"
                      LabelName="Password"
                      Type="password"
                      //   PasswordIndication={true}
                    />
                    <InputBox
                      Name="dob"
                      Placeholder="dd/mm/yyyy"
                      LabelName="dob"
                      Type="date"
                    />
                  </div>
                ) : (
                  ""
                )}

                {otp === true ? (
                  <InputBox
                    Name="otp"
                    Placeholder="Enter OTP"
                    LabelName="OTP"
                    Type="text"
                  />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}

            {/* update profile  */}
            {UpdateProfile === true ? (
              <div className="lg:grid lg:grid-cols-2 gap-4 ">
                <InputBox
                  Name="language"
                  Placeholder="Eg: Hindi, english, bengali, tamil, marathi etc"
                  LabelName="Enter your consulting Languages"
                  Type="text"
                  LanguageIndication={true}
                />
                <InputBox
                  Name="experience"
                  Placeholder="In years eg: 2, 3. "
                  LabelName="Total experience"
                  Type="text"
                />
                <InputBox
                  Name="specialization"
                  Placeholder="Eg: Tarot reader, cosmic reader etc"
                  LabelName="Specialization"
                  Type="text"
                />
                <InputBox
                  Name="category"
                  Placeholder="Eg: Love, Marriage etc"
                  LabelName="Category"
                  Type="text"
                />

                {/* Image Handling */}

                <div className="h-fit w-full    border border-[#E7DCC8] rounded-md bg-[#FFFFFF]  flex justify-between px-2 items-center my-5">
                  <div className="">
                    <InputBox
                      LabelName="Profile Image"
                      Type="file"
                      onChange={handleProfileImage}
                      className="w-full h-full"
                    />
                  </div>

                  {profileImage && (
                    <img
                      src={profileImage.preview}
                      alt="preview"
                      className="h-44 w-44 rounded-full object-cover"
                    />
                  )}
                </div>

                {/* Certificate */}
                <div className="border rounded-xl flex justify-between px-2 items-center my-5  border-[#E7DCC8] bg-[#FFFFFF] ">
                  <div>
                    <InputBox
                      LabelName="Certification"
                      Type="file"
                      onChange={handleCertificate}
                    />
                  </div>

                  {certificate && (
                    <div className="mt-3">
                      {certificate.file.type.startsWith("image/") ? (
                        <img
                          src={certificate.preview}
                          className="h-32 w-40 object-cover rounded-lg"
                        />
                      ) : (
                        <p className="text-green-600">
                          ✓ {certificate.file.name}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            <Button Label="Submit" type={"submit"} className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};
