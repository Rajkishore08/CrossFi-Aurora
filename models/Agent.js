const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  strategy: { type: String, required: true },
  parameters: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Agent", AgentSchema);
