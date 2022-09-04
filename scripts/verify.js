
async function verify() {
    const tokenMap =
        [

            { "token": "WBTC ", "address": "0xbC9052c594261Acc1a26271567bDb72A8A1Acac9" },
            { "token": "WETH ", "address": "0x96058B65CE7d0DBa4B85DAf49E06663B97442137" },
            { "token": "LINK ", "address": "0x5B3a2CAED90515e36830167529AFeDea75419b7a" },
            { "token": "AAVE", "address": "0x9Bb8F40d53DA2796F34d85f5bf27C475Df03E70C" },
            { "token": "AAPL", "address": "0x930b24b4b578409153501429cc256FBbDAB6e893" },
            { "token": "GOOGL", "address": "0x6499b7b57D07a9091eB7cE5548c086308a868Fe9" },
            { "token": "GLD", "address": "0x7D157E24f3D6FB7Bd8B3008A76DFBCde267daCa8" },
            { "token": "TSLA", "address": "0x22044e0e4E2D774f34227FC8a1BF804Ff9Fc9A35" },
            { "token": "EUR", "address": "0x3339f437Fd3abCdaD135446B6F05bB957Bb29c6A" },
            { "token": "JPY", "address": "0xa0D0693047cC189D5742160941c1703857616889" },
            { "token": "TWTR", "address": "0x181Bf62B82AFafa87630C819482ABbA819e49601" },
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