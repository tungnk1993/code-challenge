// contracts/interface.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface LightERC20 {
    function balanceOf(address account) external view returns (uint256);
}