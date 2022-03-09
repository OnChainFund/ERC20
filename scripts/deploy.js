const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // 顯示部署者帳號
  console.log("Deploying contract with account:", deployer.address);
  // 顯示部署者餘額
  console.log("Deployer accout balance:", (await deployer.getBalance()).toString());
  // 部署
  const LJCoin = await hre.ethers.getContractFactory("LJCoin");
  const lj_coin = await LJCoin.deploy();

  await lj_coin.deployed();

  console.log("LJ token deployed to:", lj_coin.address);
  console.log("Deployer accout balance:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
