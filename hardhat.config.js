require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
FUJI_C_CHAIN_PROVIDER_URL="https://api.avax-test.network/ext/bc/C/rpc"
module.exports ={
    solidity:"0.8.4",
    networks: {
        fuji: {
            url: FUJI_C_CHAIN_PROVIDER_URL,
            accounts: [process.env.PRIVATE_KEY]
        }   },
    etherscan: {
        apiKey: {
            rinkeby: process.env.ETHERSCAN_API_KEY,
            avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY,
        },
    }
};