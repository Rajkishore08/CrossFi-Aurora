const { ethers } = require("ethers");

// Aurora RPC URL (Replace with actual RPC endpoint)
const AURORA_RPC_URL = "https://mainnet.aurora.dev";

// Private key of the wallet (Use environment variables for security)
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Smart Contract ABI (Replace with actual ABI)
const TRADE_CONTRACT_ABI = [
  "function executeTrade(address tokenIn, address tokenOut, uint256 amount) external returns (bool)"
];

// Smart Contract Address (Replace with actual contract address)
const TRADE_CONTRACT_ADDRESS = "0xYourSmartContractAddress";

// Initialize provider and wallet
const provider = new ethers.JsonRpcProvider(AURORA_RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const tradeContract = new ethers.Contract(TRADE_CONTRACT_ADDRESS, TRADE_CONTRACT_ABI, wallet);

const executeTrade = async (tradeData) => {
  try {
    const { tokenIn, tokenOut, amount } = tradeData;

    console.log("Executing trade on Aurora...");
    
    // Send transaction
    const tx = await tradeContract.executeTrade(tokenIn, tokenOut, amount);
    await tx.wait(); // Wait for transaction confirmation

    console.log(`Trade executed successfully! Tx Hash: ${tx.hash}`);
    return { status: "completed", txHash: tx.hash };
  } catch (error) {
    console.error("Trade execution failed:", error);
    return { status: "failed", error: error.message };
  }
};

module.exports = { executeTrade };
