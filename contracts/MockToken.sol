// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract MockToken is ERC20, Ownable, ERC20Permit {
    constructor(string memory symbol_)
        ERC20(symbol_, symbol_)
        ERC20Permit(symbol_)
    {
        _mint(msg.sender, 10000000000000000000000000000000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
