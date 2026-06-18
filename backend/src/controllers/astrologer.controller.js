import { Astrologer } from "../models/astrologer.model.js";
import { sendSMS } from "../services/sms.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  sendOtpLoginSMS,
  sendOtpRegisterSMS,
  sendRegisterConfirmationSMS,
} from "../workers/sms.workers.js";

const registerAstrologer = asyncHandler(async (req, res) => {
  const { name, contactNumber, email, password } = req.body;
  if (!name || !contactNumber || !email || !password)
    throw new ApiError(401, "All details are required");

  const existingAstrologer = await Astrologer.findOne({
    $or: [{ contactNumber }, ...(email ? [{ email }] : [])],
  });
  if (existingAstrologer)
    throw new ApiError(
      403,
      "Astrologer already exists with this credentials !",
    );

  // contact number
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(contactNumber))
    throw new ApiError(400, "Invalid contact number");

  // email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) throw new ApiError(400, "Invalid email format");

  // password
  if (password.length < 8 || password.length > 20)
    throw new ApiError(
      401,
      "Password must be between 8 and 20 characters long",
    );
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

  if (!passwordRegex.test(password))
    throw new ApiError(
      400,
      "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character",
    );

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const createAstrologer = await Astrologer.create({
    name,
    contactNumber,
    email,
    password,
    otp,
  });

  await sendOtpRegisterSMS(contactNumber, otp);

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { otp, createAstrologer },
        "OTP has been sent to your contact number. ",
      ),
    );
});

const loginAstrologer = asyncHandler(async (req, res) => {
  const { contactNumber, password } = req.body;
  if (!contactNumber || !password)
    throw new ApiError(401, "Fields are missing");

  const astrologer = await Astrologer.findOne({ contactNumber });
  if (!astrologer) throw new ApiError(401, "Invalid credentials");

  // Check if the password is correct
  const isPasswordValid = await Astrologer.comparePassword(password);
  if (!isPasswordValid) {
    return new ApiError(401, "Invalid password");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  astrologer.otp = otp;
  await astrologer.save();
  if (!astrologer.otp === otp)
    throw new ApiError(
      403,
      "Unable to process the OTP, please try again later",
    );

  await sendOtpLoginSMS(contactNumber, otp);

  return res
    .status(201)
    .json(new ApiResponse(201, astrologer, "Please enter the OTP"));
});

const otpAuthentication = asyncHandler(async (req, res) => {
  const { contactNumber, otp } = req.body;
  if (!contactNumber) throw new ApiError(400, "Invalic credentials");

  const astrologer = await Astrologer.findOne(contactNumber);
  if (!astrologer) throw new ApiError(401, "Astrologer not found");

  if (astrologer.otp != otp) throw new ApiError(403, "Invalid OTP");

  const accessToken = astrologer.generateAccessToken();
  const refreshToken = astrologer.generateRefreshToken();
  const tokens = { accessToken, refreshToken };

  // verified otp

  return res
    .status(200)
    .json(
      new ApiResponse(201, { astrologer, tokens }, "Verified successfully !"),
    );
});

const welcomeMessage = asyncHandler(async (req, res) => {
  const { contactNumber } = req.params;
  if (!contactNumber) throw new ApiError(401, "Contact number is missing");

  await sendRegisterConfirmationSMS(contactNumber);
  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Sms sent successfully !"));
});

const updateProfile = asyncHandler(async (req, res) => {
  const { astrologerId } = req.params;
  if (!astrologerId) throw new ApiError(401, "Invalid requested url parameter");

  const {
    languages,
    experience,
    specialization,
    categories,
    aadharNumber,
    panNumber,
    gst,
  } = req.body;

  const languageList = languages
    ? languages.split(",").map((s) => s.trim())
    : [];
  const specializationList = specialization
    ? specialization.split(",").map((s) => s.trim())
    : [];
  const categoryList = categories
    ? categories.split(",").map((s) => s.trim())
    : [];

  const astrologer = await Astrologer.findByIdAndUpdate(astrologerId, {
    languages: languageList,
    experience: experience,
    specialization: specializationList,
    categories: categoryList,
    governmentId: {
      aadharNumber: aadharNumber,
      panNumber: panNumber,
      gst: gst,
    },
  });
  if (!astrologer)
    throw new ApiError(403, "Something went wrong, please try again later !");

  return res
    .status(201)
    .json(new ApiResponse(201, astrologer, "Profile updated successfully!"));
});

const createChargesPlan = asyncHandler(async (req, res) => {
  const { astrologerId } = req.params;
  const { name, amount, minDuration } = req.body;
  if (!name || !amount || !minDuration)
    throw new ApiError(400, "All fields are required.");

  const astrologer = await Astrologer.findById(astrologerId);
  if (!astrologer) throw new ApiError(401, "Astrologer not found");

  const fee = {
    name,
    amount,
    minDuration,
  };
  astrologer.charges.push(fee);
  await astrologer.save();

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Fee structure added successfully !"));
});

// const addGalleryImage = asyncHandler(async(req,res)=>{
// })

const getAstrologerForFeed = asyncHandler(async (req, res) => {
  const { limit = 20 } = req.body;

  const baseMatch = {
    isActive: true,
    isVerified: true,
  };

  // Featured / Subscription Priority
  const featuredAstrologers = await Astrologer.find(baseMatch)
    .sort({
      subscriptionPriority: 1,
      isOnline: -1,
      rating: -1,
    })
    .limit(Number(limit));

  // Online Astrologers
  const onlineAstrologers = await Astrologer.find({
    ...baseMatch,
    isOnline: true,
  })
    .sort({
      subscriptionPriority: 1,
      rating: -1,
    })
    .limit(Number(limit));

  // Language Wise
  const languageWise = await Astrologer.aggregate([
    {
      $match: baseMatch,
    },
    {
      $unwind: "$languages",
    },
    {
      $sort: {
        subscriptionPriority: 1,
        rating: -1,
      },
    },
    {
      $group: {
        _id: "$languages",
        astrologers: {
          $push: "$$ROOT",
        },
      },
    },
  ]);

  // Specialization Wise
  const specializationWise = await Astrologer.aggregate([
    {
      $match: baseMatch,
    },
    {
      $unwind: "$specialization",
    },
    {
      $sort: {
        subscriptionPriority: 1,
        rating: -1,
      },
    },
    {
      $group: {
        _id: "$specialization",
        astrologers: {
          $push: "$$ROOT",
        },
      },
    },
  ]);

  // Category Wise
  const categoryWise = await Astrologer.aggregate([
    {
      $match: baseMatch,
    },
    {
      $unwind: "$categories",
    },
    {
      $sort: {
        subscriptionPriority: 1,
        rating: -1,
      },
    },
    {
      $group: {
        _id: "$categories",
        astrologers: {
          $push: "$$ROOT",
        },
      },
    },
  ]);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        featuredAstrologers,
        onlineAstrologers,
        languageWise,
        specializationWise,
        categoryWise,
      },
      "Feed fetched successfully !",
    ),
  );
});

const deleteAstrologerById = asyncHandler(async (req, res) => {
  const { astrologerId } = req.params;
  if (!astrologerId) throw new ApiError(400, "Invalid request");

  const astrologer = await Astrologer.findById(astrologerId);
  if (!astrologer) throw new ApiError(401, "Astrologer not found");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Deletion request is successfull !"));
});

const deleteAstrologerByContactNumber = asyncHandler(async (req, res) => {
  const { name, contactNumber, email, password } = req.body;
  if (!name || !contactNumber || !email || !password)
    throw new ApiError(401, "All details are required");

  const astrologer = await Astrologer.findOneAndDelete({
    $or: [{ contactNumber }, ...(email ? [{ email }] : [])],
  });
  if (!astrologer)
    throw new ApiResponse(
      200,
      {},
      "Please restart the process of registration",
    );

  return res
    .status(200)
    .json(201, {}, "Please restart the process of registration");
});

export {
  registerAstrologer,
  loginAstrologer,
  otpAuthentication,
  welcomeMessage,
  updateProfile,
  getAstrologerForFeed,
  deleteAstrologerById,
  deleteAstrologerByContactNumber,
};
