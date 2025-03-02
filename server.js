require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import route handlers
const tradeRoutes = require("./routes/tradeRoutes");
const twitterRoutes = require("./routes/twitterRoutes");

// Import AI & DeFi services
const { executeTrade, buyTheDip } = require("./services/defiAgent");
const { postOnSocialMedia, trackMemecoinTrends } = require("./services/socialMediaAgent");
const { generateRandomFinancialAction } = require("./services/absurdAgent");
const { integrateNuffle } = require("./services/nuffleIntegration");
const { fraxDeposit } = require("./services/fraxIntegration");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Route middleware
app.use("/api/trade", tradeRoutes);
app.use("/api/twitter", twitterRoutes);

// AI & DeFi API Endpoints
app.post("/api/trade/execute", async (req, res) => {
  const trade = await executeTrade(req.body);
  res.json(trade);
});

app.post("/api/trade/buy-dip", async (req, res) => {
  const dip = await buyTheDip(req.body.token, req.body.amount);
  res.json(dip);
});

app.post("/api/social/post", async (req, res) => {
  const post = await postOnSocialMedia(req.body.platform, req.body.message);
  res.json(post);
});

app.get("/api/social/trends", async (req, res) => {
  const trends = await trackMemecoinTrends();
  res.json({ trends });
});

app.get("/api/absurd-action", (req, res) => {
  res.json({ action: generateRandomFinancialAction() });
});

app.get("/api/nuffle", async (req, res) => {
  res.json(await integrateNuffle());
});

app.post("/api/frax/deposit", async (req, res) => {
  res.json(await fraxDeposit(req.body.amount));
});

// Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
