import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: { type: String },
    contactNumber: { type: String },
    email: { type: String },
    password: { type: String },
    dateOfBirth: { type: Date },
    timeOfBirth: { type: Date },
    zodiac: { type: String },
    images: {
      profileImage: { url: String, fileId: String },
    },
    astrologersContacted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Astrologer",
      },
    ],
    wallet: { type: Number, default: 0 },
    otp: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    isOnline: { type: Boolean, default: false },
    lastSeen: { type: Date },
    socketId: { type: String, default: null },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, role: "User" },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );
};
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, role: "User" },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );
};

export const User = mongoose.model("User", userSchema);
