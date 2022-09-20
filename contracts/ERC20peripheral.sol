// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IFactory.sol";

contract ERC20peripheral {
    struct Pair {
        IFactory pairFactory;
        address targetAsset;
        address denominatedAsset;
    }

    function getBalances(address owner, IERC20[] memory tokens)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory balances;
        for (uint256 index = 0; index < tokens.length; index++) {
            balances[index] = tokens[index].balanceOf(owner);
        }
        return balances;
    }

    function getPrices(Pair[] memory pairs)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory prices;
        for (uint256 index = 0; index < pairs.length; index++) {
            address dexPair = pairs[index].pairFactory.getPair(
                pairs[index].targetAsset,
                pairs[index].denominatedAsset
            );
            prices[index] = ((IERC20(pairs[index].targetAsset).balanceOf(
                dexPair
            ) * 1e18) / IERC20(pairs[index].targetAsset).balanceOf(dexPair));
        }
        return prices;
    }
}
