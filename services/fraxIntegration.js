const fraxDeposit = async (amount) => {
  console.log(`Depositing ${amount} into Frax Finance...`);
  return { status: "Deposited", amount };
};

module.exports = { fraxDeposit };
