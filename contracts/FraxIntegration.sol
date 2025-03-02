// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FraxIntegration is Ownable {
    IERC20 public fraxToken;
    mapping(address => uint256) public deposits;
    uint256 public totalDeposits;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event FraxTokenUpdated(address indexed newFraxToken);

    constructor(address _fraxToken) {
        require(_fraxToken != address(0), "Invalid Frax token address");
        fraxToken = IERC20(_fraxToken);
    }

    /**
     * @dev Allows users to deposit FRAX into the contract.
     * @param amount Amount of FRAX to deposit.
     */
    function depositToFrax(uint256 amount) external {
        require(amount > 0, "Deposit amount must be greater than zero");
        require(fraxToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        deposits[msg.sender] += amount;
        totalDeposits += amount;

        emit Deposited(msg.sender, amount);
    }

    /**
     * @dev Allows users to withdraw their FRAX deposits.
     * @param amount Amount of FRAX to withdraw.
     */
    function withdrawFromFrax(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than zero");
        require(deposits[msg.sender] >= amount, "Insufficient balance");

        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
        require(fraxToken.transfer(msg.sender, amount), "Withdrawal transfer failed");

        emit Withdrawn(msg.sender, amount);
    }

    /**
     * @dev Allows the owner to update the Frax token contract address.
     * @param newFraxToken New Frax token address.
     */
    function updateFraxToken(address newFraxToken) external onlyOwner {
        require(newFraxToken != address(0), "Invalid address");
        fraxToken = IERC20(newFraxToken);

        emit FraxTokenUpdated(newFraxToken);
    }
}
