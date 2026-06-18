import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    user: { type: momgoose.Schema.Types.ObjectId, ref: "User", required: true },
    astrologer: {
      type: momgoose.Schema.Types.ObjectId,
      ref: "Astrologer",
      required: true,
    },
    lastMessage: { type: String, default: "" },
    lastMessageType: {
      type: String,
      enum: ["text", "document", "image"],
      default: "text",
    },
    lastMessageSenderType: { type: String, enum: ["User", "Astrologer"] },
    unreadForUser: { type: Number, default: 0 },
    unreadForAstrologer: { type: Number, default: 0 },
    isBlockedByUser: { type: Boolean, default: false },
    isBlockedByAstrologer: { type: Boolean, default: false },
    chatStartedAt: { type: Date, default: Date.now },
    lastMessageAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

conversationSchema.index({ user: 1, astrologer: 1 });

export const Conversation = mongoose.model("Conversation", conversationSchema);
