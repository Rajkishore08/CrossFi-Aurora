require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tradeRoutes = require("./routes/tradeRoutes");
const twitterRoutes = require("./routes/twitterRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.use("/api/trade", tradeRoutes);
app.use("/api/twitter", twitterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
