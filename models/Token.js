const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    ip: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    userAgent: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
