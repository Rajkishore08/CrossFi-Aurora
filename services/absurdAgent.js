const generateRandomFinancialAction = () => {
  const actions = ["HODL", "YOLO buy", "Panic Sell", "Reinvest in Memecoins"];
  return actions[Math.floor(Math.random() * actions.length)];
};

module.exports = { generateRandomFinancialAction };
