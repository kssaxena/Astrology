import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const astrologerSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    contactNumber: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true },
    password: { type: String, select: false },
    languages: [String],
    experience: { type: Number },
    specialization: [String],
    categories: [String],
    images: {
      profileImage: { url: String, fileId: String },
      gallery: { url: String, fileId: String },
      aadharFront: { url: String, fileId: String },
      aadharBack: { url: String, fileId: String },
      panImage: { url: String, fileId: String },
      gst: { url: String, fileId: String },
    },
    certification: {
      name: { type: String },
      yearCompleted: { type: Number },
      institution: { type: String },
      instutionCity: { type: String },
      instutionState: { type: String },
    },
    // gov ids are not necessary until they want to complete full KYC
    governmentId: [
      { aadharNumber: { type: Number } },
      { panNumber: { type: String } },
      { gst: { type: String } },
    ],
    otp: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: false },
    lastseen: { type: Date },
    socketId: { type: String, default: null },
    portalSubscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AstroSubscription",
    },
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