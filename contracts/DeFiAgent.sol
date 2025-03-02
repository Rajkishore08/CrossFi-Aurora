// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DeFiAgent {
    IERC20 public frax;
    address public owner;

    constructor(address _frax) {
        frax = IERC20(_frax);
        owner = msg.sender;
    }

    function buyFrax(uint256 amount) external {
        require(msg.sender == owner, "Not authorized");
        frax.transferFrom(owner, address(this), amount);
    }

    function sellFrax(uint256 amount) external {
        require(msg.sender == owner, "Not authorized");
        frax.transfer(owner, amount);
    }
}
