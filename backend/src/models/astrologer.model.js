import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const astrologerSchema = new mongoose.Schema(
  {
    // below details are the initial details for registering a astrologer
    name: { type: String, trim: true },
    contactNumber: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true },
    password: { type: String, select: false },
    // below details are to be updated when astrologer will update his profile
    languages: [String],
    experience: { type: Number },
    specialization: [String],
    categories: [String],
    images: {
      profileImage: { url: String, fileId: String },
      gallery: [{ url: String, fileId: String }],
      aadharFront: { url: String, fileId: String },
      aadharBack: { url: String, fileId: String },
      panImage: { url: String, fileId: String },
      gst: { url: String, fileId: String },
    },
    certification: [
      {
        name: { type: String },
        yearCompleted: { type: Number },
        institution: { type: String },
        instutionCity: { type: String },
        instutionState: { type: String },
      },
    ],
    // gov ids are not necessary until they want to complete full KYC
    governmentId: { aadharNumber: Number, panNumber: String, gst: String },
    wallet: { type: Number, default: 0 },
    otp: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isProfileComplete: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    isOnline: { type: Boolean, default: false },
    lastSeen: { type: Date },
    canChat: { type: Boolean, default: true },
    canReceiveCalls: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ["online", "offline", "busy", "in_call"],
      default: "offline",
    },
    socketId: { type: String, default: null },
    portalSubscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AstroSubscription",
    },
    subscriptionPriority: { type: Number, default: 4 },
    featuredTill: Date,
    rating: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    totalChats: { type: Number, default: 0 },
    totalCalls: { type: Number, default: 0 },
    profileViews: { type: Number, default: 0 },
    charges: [
      {
        name: {
          type: String,
          enum: [
            "Call",
            "Chat",
            "Video Call",
            "Call and Chat",
            "Chat and Video",
          ],
          default: "Call",
        },
        amount: { type: Number, default: 0 },
        minDuration: { type: Number, default: 3 },
        isActive: { type: Boolean, default: true },
      },
    ],
  },
  { timestamps: true },
);

astrologerSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

astrologerSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

astrologerSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, role: "Astrologer" },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );
};

astrologerSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id, role: "Astrologer" },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );
};

export const Astrologer = mongoose.model("Astrologer", astrologerSchema);
