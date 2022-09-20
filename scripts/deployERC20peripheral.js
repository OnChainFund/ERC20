const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  // 顯示部署者帳號
  console.log("Deploying contract with account:", deployer.address);
  // 顯示部署者餘額
  console.log("Deployer accout balance:", (await deployer.getBalance()).toString());
  // 部署
  const ERC20peripheralContract = await hre.ethers.getContractFactory("ERC20peripheral");
  const ERC20peripheralContractDeploy = await ERC20peripheralContract.deploy();
  await ERC20peripheralContractDeploy.deployed();
  console.log(("ERC20peripheralContract deployed to:"), ERC20peripheralContractDeploy.address);
  console.log("Deployer account balance:", (await deployer.getBalance()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
