# 🚀 CrossFi-Aurora: AI-Powered DeFi & Frax Finance Integration  

## 📌 Overview  
CrossFi-Aurora is a cutting-edge decentralized finance (DeFi) platform integrating **AI-driven agents**, **Frax Finance**, and **Aurora Cloud** to enable seamless **stablecoin deposits, withdrawals, yield tracking, and automated DeFi strategies**. This platform leverages AI to execute market-making bots, portfolio management, and AI-driven trading.  

## 🔥 Key Features  
- ✅ **AI DeFi Agents** – Implements **DCA**, yield farming, and AI-driven market-making strategies.  
- ✅ **Frax Finance Integration** – Users can deposit, withdraw, and earn yield on **FRAX** stablecoins.  
- ✅ **Social Media AI Agents** – Automated tracking of **memecoin trends** and market sentiment.  
- ✅ **Absurd AI Finance** – Unpredictable financial strategies driven by an AI swarm.  
- ✅ **Nuffle Labs Integration** – AI-powered portfolio optimization and asset rebalancing.  
- ✅ **Aurora Cloud Virtual Chain** – Runs AI Agents on an **independent blockchain**.  

---

## 🛠️ Tech Stack  
- **Solidity** – Smart contract development  
- **Aurora Cloud Console** – AI-powered virtual chain deployment  
- **Frax Finance** – Stablecoin liquidity integration  
- **Safe & Enso** – Smart contract automation  
- **OpenZeppelin** – Secure contract utilities  
- **Hardhat** – Smart contract deployment and testing  

---

![image](https://github.com/user-attachments/assets/c70e1265-01f3-400a-bb65-db0f19c6729e)
![image](https://github.com/user-attachments/assets/5955955b-5f3e-4148-9a66-ebd38da28c85)
![image](https://github.com/user-attachments/assets/2deb927f-086a-40e6-86ef-18d9b44c37f2)
![image](https://github.com/user-attachments/assets/a6ffe91e-44ad-42ae-acc9-6e0e0b563f02)
![image](https://github.com/user-attachments/assets/e73ace6a-8ae5-45fe-9fc5-9da46034bded)


---

## 🚀 Quick Setup  

### **1️⃣ Install Dependencies**  
```sh
npm install
```

### **2️⃣ Compile the Smart Contracts**  
```sh
npx hardhat compile
```

### **3️⃣ Deploy the Contracts**  
Modify `scripts/deployContracts.js` with your wallet and deploy using:  
```sh
npx hardhat run scripts/deployContracts.js --network aurora
```

### **4️⃣ Run Tests**  
```sh
npx hardhat test
```

---

## 🔗 Smart Contracts  
### **AI Trading Agent**  
```solidity
function executeTrade(uint256 amount, address token) external;
```
✔️ Automates DeFi trading strategies.  

### **Frax Finance Integration**  
```solidity
function depositToFrax(uint256 amount) external;
function withdrawFromFrax(uint256 amount) external;
```
✔️ Enables users to deposit and withdraw **FRAX**.  

### **Social Media AI Agent**  
```solidity
function trackMemecoinTrends() external returns (string memory);
```
✔️ Monitors and analyzes memecoin sentiment.  

### **Admin Functions**  
- **Update Frax Token Address**  
  ```solidity
  function updateFraxToken(address newFraxToken) external onlyOwner;
  ```
  ✔️ Allows contract owner to change the FRAX contract.  

---

## 🛡️ Security Measures  
- 🔹 Uses **OpenZeppelin’s Ownable** to prevent unauthorized access.  
- 🔹 Implements **checks for zero addresses** in critical functions.  
- 🔹 Ensures **secure token transfers** with built-in error handling.  

---

## 🏆 Hackathon Eligibility  
This module strongly qualifies for:  
✅ **Aurora: AI Agentic Chains Bounty ($10K Prize Pool)** – AI-powered agents deployed on **Aurora Cloud**.  
✅ **Frax Finance Track ($5K)** – Best integration of Frax into DeFi systems.  
✅ **DeFi Agents Track ($20K)** – Enables **DCA**, yield farming, and AI-driven trading strategies.  
✅ **Nuffle Labs ($10K)** – Best Nuffle integration for **on-chain AI-powered financial strategies**.  
✅ **Social Media Agents ($20K)** – Implements **AI memecoin trend tracking** for social trading.  
✅ **Absurd Agents ($10K)** – Unpredictable AI financial experiments.  

---

## 🤝 Contributing  
We welcome contributions! If you’d like to improve this integration, follow these steps:  
1. Fork the repository  
2. Create a new feature branch  
3. Commit changes and push  
4. Open a Pull Request  

---

## 📝 License  
This project is licensed under the **MIT License**.  

---

## 🔗 Useful Links  
- **Aurora Cloud Console** – [https://auroracloud.dev/](https://auroracloud.dev/)  
- **Frax Finance** – [https://frax.finance/](https://frax.finance/)  
- **Aurora Docs** – [https://doc.aurora.dev/](https://doc.aurora.dev/)  
- **Hardhat** – [https://hardhat.org/](https://hardhat.org/)  

---

🎯 **CrossFi-Aurora x AI Agents x Frax Finance – The Future of DeFi 🚀**

