const { ethers } = require("hardhat");
const hre = require("hardhat");
async function verify() {
    const tokenMap =
        [

            { "token": "BTCDOWN", "address": "0xE85e1219691aF541F064E111161174C1F7Db2e84" },
            { "token": "ETHDOWN", "address": "0xB7B8E01a9F5dFe405c37b667E8F81a66D4f629EA" },
            { "token": "USDTDOWN", "address": "0x7f5BE805EFdbc5b42A3cfBC41B2961A0A9d9e3B2" },
            { "token": "AAVEDOWN", "address": "0x0690b3F6f8271b000f800F051f82B65F41D29C5E" },
            { "token": "AAPLDOWN", "address": "0xC7c69FFC3561fb3284F4d6D25d8b69D8CB3b59e9" },
            { "token": "TWTRDOWN", "address": "0xe05F46AAfa9919f722bc83fbD2Bb7B3Ac23E1Bc2" },
            { "token": "GLDDOWN", "address": "0xFb1438372dB41dAFFcf4019e80eAE2D673B8c3b7" },
            { "token": "TSLADOWN", "address": "0xa19baf63747637D0233702bA8F1eFcD6729db4DF" },
            { "token": "LINKDOWN", "address": "0xA964EeaE6e77B1d01432942bc31186cB56eA5804" },
            { "token": "AVAXDOWN", "address": "0x33506d382684db988D9021A80dBEeEF46a5ABC3A" },
            // { "token": "WBTC ", "address": "0xbC9052c594261Acc1a26271567bDb72A8A1Acac9" },
            // { "token": "WETH ", "address": "0x96058B65CE7d0DBa4B85DAf49E06663B97442137" },
            // { "token": "LINK ", "address": "0x5B3a2CAED90515e36830167529AFeDea75419b7a" },
            // { "token": "AAVE", "address": "0x9Bb8F40d53DA2796F34d85f5bf27C475Df03E70C" },
            // { "token": "AAPL", "address": "0x930b24b4b578409153501429cc256FBbDAB6e893" },
            // { "token": "GOOGL", "address": "0x6499b7b57D07a9091eB7cE5548c086308a868Fe9" },
            // { "token": "GLD", "address": "0x7D157E24f3D6FB7Bd8B3008A76DFBCde267daCa8" },
            // { "token": "TSLA", "address": "0x22044e0e4E2D774f34227FC8a1BF804Ff9Fc9A35" },
            // { "token": "EUR", "address": "0x3339f437Fd3abCdaD135446B6F05bB957Bb29c6A" },
            // { "token": "JPY", "address": "0xa0D0693047cC189D5742160941c1703857616889" },
            // { "token": "TWTR", "address": "0x181Bf62B82AFafa87630C819482ABbA819e49601" },
        ]
    for (let index = 0; index < tokenMap.length; index++) {

        await hre.run("verify:verify", {
            address: tokenMap[index]["address"],
            constructorArguments: [
                tokenMap[index]["token"]
            ],
        });
        console.log("======================")
        console.log("verified")
        console.log(tokenMap[index]["token"])
        console.log(tokenMap[index]["address"])
    }
}

verify()