import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "senderType",
      required: true,
    },
    senderType: { typr: String, enum: ["User", "Astrologer"], required: true },
    receivedId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "receiverType",
      required: true,
    },
    receiverType: {
      type: String,
      enum: ["User", "Astrologer"],
      required: true,
    },
    messageType: {
      type: String,
      enum: ["text", "image", "document", "system"],
      required: true,
    },
    text: { type: String, default: "" },
    attachment: {
      fileName: String,
      fileUrl: String,
      fileId: String,
      fileSize: Number,
      mimeType: String,
    },
    status: {
      type: String,
      enum: ["sent", "delivered", "seen"],
      default: "sent",
    },
    deliveredAt: Date,
    seenAt: Date,
    isDeletedBySender: { type: Boolean, default: false },
    isDeletedByReceiver: { type: Boolean, default: false },
  },
  { timestamps: true },
);

messageSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 2592000,
  },
);

export const Message = mongoose.model("Message", messageSchema);
