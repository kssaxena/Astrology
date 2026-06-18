import mongoose from "mongoose";

const astroSubscriptionSchema = new mongoose.Schema(
  {
    astrologer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Astrologer",
      required: true,
    },
    planName: {
      type: String,
      enum: ["FREE", "SILVER", "GOLD", "PLATINUM"],
      required: true,
    },
    priority: { type: Number, default: 4 },
    amountPaid: { type: Number, default: 0 },
    validityDays: { type: Number, default: 30 },
    startDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    isFeatured: { type: Boolean, default: false },
    featuredTill: { type: Date },
    maxDailyLeadLimit: { type: Number, default: 0 },
    totalLeadsReceived: { type: Number, default: 0 },
    totalProfileViews: { type: Number, default: 0 },
    totalSearchAppearances: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["ACTIVE", "EXPIRED", "CANCELLED"],
      default: "ACTIVE",
    },
    transactionId: String,
    paymentMethod: String,
  },
  { timestamps: true },
);

export const AstroSubscription = mongoose.model(
  "AstroSubscription",
  astroSubscriptionSchema,
);
