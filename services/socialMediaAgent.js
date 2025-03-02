const postOnSocialMedia = async (platform, message) => {
  console.log(`Posting on ${platform}: ${message}`);
  return { status: "posted", platform };
};

const trackMemecoinTrends = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
  return response.data.coins.map((coin) => coin.item.name);
};

module.exports = { postOnSocialMedia, trackMemecoinTrends };
