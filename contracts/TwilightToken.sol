//SPDX-License-Identifier: Unlicense
//Declare the version of solidity to compile this contract.
//This must match the version of solidity in your hardhat.config.js file
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TwilightToken is ERC20 {
    uint256 constant _initial_supply = 50000000 * (10**18);

    constructor() ERC20("TwilightToken", "TLT") {
        _mint(msg.sender, _initial_supply);
    }
}
