const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  user: { type: String, required: true },
  amount: { type: Number, required: true },
  asset: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
