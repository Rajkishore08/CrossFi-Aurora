const express = require("express");
const { executeTrade } = require("../services/auroraAgent");

const router = express.Router();

router.post("/execute", async (req, res) => {
  try {
    const tradeResult = await executeTrade(req.body);
    res.json({ success: true, tradeResult });
  } catch (err) {
    res.status(500).json({ error: "Trade Execution Failed", details: err });
  }
});

module.exports = router;
