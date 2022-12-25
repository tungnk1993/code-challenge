// contracts/Utility.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interface.sol";

contract Utility {
    struct Balance {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokens) public view returns (Balance[] memory) {
        Balance[] memory balances = new Balance[](tokens.length);

        for (uint i = 0; i < tokens.length; i++) {
            balances[i] = Balance(tokens[i], LightERC20(tokens[i]).balanceOf(wallet));
        }

        return balances;
    }
}