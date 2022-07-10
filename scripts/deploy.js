const { ethers } = require("hardhat");
const hre = require("hardhat");

const tokenMap = [
  "WBTC ",
  "WETH ",
  "LINK ",
  "USDT ",
  "AAVE",
  "AAPL",
  "GOOGL",
  "GLD",
  "TSLA",
]

async function main() {
  const [deployer] = await ethers.getSigners();
  // 顯示部署者帳號
  console.log("Deploying contract with account:", deployer.address);
  // 顯示部署者餘額
  console.log("Deployer accout balance:", (await deployer.getBalance()).toString());
  // 部署
  for (let index = 0; index < tokenMap.length; index++) {
    const symbol = tokenMap[index];
    const mockTokenContract = await hre.ethers.getContractFactory("MockToken");
    const mockTokenDeploy = await mockTokenContract.deploy(symbol);
    await mockTokenDeploy.deployed();
    console.log((tokenMap[index] + " deployed to:"), mockTokenDeploy.address);
  }
  console.log("Deployer account balance:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
