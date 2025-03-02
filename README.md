# 🚀 CrossFi-Aurora: Frax Finance Integration  

## 📌 Overview  
CrossFi-Aurora is a decentralized finance (DeFi) platform that integrates **Frax Finance** to enable seamless **stablecoin deposits, withdrawals, and yield tracking** on the Aurora blockchain. This module enhances **DeFi agents** by leveraging Frax’s liquidity ecosystem.  

## 🔥 Key Features  
- ✅ **Deposit & Withdraw FRAX** – Users can securely deposit and withdraw FRAX stablecoins.  
- ✅ **Automated Yield Tracking** – Keeps a record of user deposits for potential yield farming integrations.  
- ✅ **Secure & Scalable** – Uses OpenZeppelin’s security libraries for safe transactions.  
- ✅ **Admin Control** – The owner can update Frax token contracts when needed.  

---

## 🛠️ Tech Stack  
- **Solidity** – Smart contract development  
- **Aurora Blockchain** – High-performance EVM-compatible layer  
- **Frax Finance** – Stablecoin liquidity integration  
- **OpenZeppelin** – Secure contract utilities  
- **Hardhat** – Smart contract deployment and testing  

---

## 📂 Project Structure  
```
CrossFi-Aurora/
│── contracts/
│   ├── FraxIntegration.sol   # Smart contract for Frax deposits & withdrawals  
│── scripts/
│   ├── deployFrax.js         # Deployment script for the contract  
│── test/
│   ├── FraxIntegration.test.js  # Unit tests for smart contract  
│── README.md                 # Documentation  
│── hardhat.config.js         # Hardhat configuration  
│── package.json              # Dependencies and scripts  
```

---

## 🚀 Quick Setup  

### **1️⃣ Install Dependencies**  
```sh
npm install
```

### **2️⃣ Compile the Smart Contract**  
```sh
npx hardhat compile
```

### **3️⃣ Deploy the Contract**  
Modify `scripts/deployFrax.js` with your wallet and deploy using:  
```sh
npx hardhat run scripts/deployFrax.js --network aurora
```

### **4️⃣ Run Tests**  
```sh
npx hardhat test
```

---

## 🔗 Smart Contract: `FraxIntegration.sol`
### **Deposit FRAX**
```solidity
function depositToFrax(uint256 amount) external;
```
✔️ Transfers `amount` of FRAX from user to the contract.

### **Withdraw FRAX**
```solidity
function withdrawFromFrax(uint256 amount) external;
```
✔️ Allows users to retrieve their FRAX balance.

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
✅ **Frax Finance Track ($5K)** – Best integration of Frax into DeFi systems.  
✅ **DeFi Agents Track ($20K)** – Enables **DCA**, yield farming, and AI-driven trading strategies.  
✅ **Nuffle Labs ($10K)** – Can be extended with **on-chain AI agent** for Frax investment strategies.  

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
- **Frax Finance** – [https://frax.finance/](https://frax.finance/)  
- **Aurora Docs** – [https://doc.aurora.dev/](https://doc.aurora.dev/)  
- **Hardhat** – [https://hardhat.org/](https://hardhat.org/)  

---

🎯 **CrossFi-Aurora x Frax Finance – Empowering DeFi Agents 🚀**  

