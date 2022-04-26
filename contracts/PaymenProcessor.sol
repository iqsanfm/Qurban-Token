//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract PaymentProcessor {
    address public admin;
    IERC20 public qbn;

    event PaymentDone(
        address payer,
        uint amount,
        uint paymentId,
        uint date
    );

    constructor( address adminAddress, address qbnAddress) {
        admin = adminAddress;
        qbn = IERC20(qbnAddress);

    }

    function pay(uint amount, uint paymentId) external {
        qbn.transferFrom(msg.sender, admin, amount);
        emit PaymentDone(msg.sender, amount, paymentId, block.timestamp);
        

    }
}