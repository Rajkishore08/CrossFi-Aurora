const express = require("express");
const { processTweet } = require("../services/twitterAgent");

const router = express.Router();

router.post("/tweet", async (req, res) => {
  try {
    const response = await processTweet(req.body.tweet);
    res.json({ success: true, response });
  } catch (err) {
    res.status(500).json({ error: "Failed to process tweet", details: err });
  }
});

module.exports = router;
