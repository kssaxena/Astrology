import { Astrologer } from "../models/astrologer.model.js";
import { sendSMS } from "../services/sms.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

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
      "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
    );

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const createAstrologer = await Astrologer.create({
    name,
    contactNumber,
    email,
    password,
    otp,
  });

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

const loginAstrologer = asyncHandler(async (req, res, next) => {
  const { contactNumber, password } = req.body;
  if (!contactNumber || !password)
    throw new ApiError(401, "Fields are missing");

  const astrologer = await Astrologer.findOne({ contactNumber });
  if (!astrologer) throw new ApiError(401, "Invalid credentials");

  // Check if the password is correct
  const isPasswordValid = await Astrologer.comparePassword(password);
  if (!isPasswordValid) {
    return next(new ApiError(401, "Invalid password"));
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  astrologer.otp = otp;
  await astrologer.save();
  if (!astrologer.otp === otp)
    throw new ApiError(
      403,
      "Unable to process the OTP, please try again later",
    );

  return res
    .status(201)
    .json(new ApiResponse(201, astrologer, "Please enter the OTP"));
});

const otpAuthentication = asynchandler(async (req, res) => {
  const { contactNumber, otp } = req.body;
  if (!contactNumber) throw new ApiError(400, "Invalic credentials");

  const astrologer = await Astrologer.findOne(contactNumber);
  if (!astrologer) throw new ApiError(401, "Astrologer not found");

  if (astrologer.otp != otp) throw new ApiError(403, "Invalid OTP");

  const accessToken = astrologer.generateAccessToken();
  const refreshToken = astrologer.generateRefreshToken();
  const tokens = { accessToken, refreshToken };

  return res
    .status(200)
    .json(
      new ApiResponse(201, { astrologer, tokens }, "Verified successfully !"),
    );
});

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



export {
  registerAstrologer,
  loginAstrologer,
  otpAuthentication,
  getAstrologerForFeed,
};
