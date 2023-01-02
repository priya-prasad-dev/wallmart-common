// const { ethers } = require("hardhat");
const hre = require("hardhat");
// const fs = require("fs");

async function main() {
  // const account = web3.eth.accounts.create();
  const Wallmart = await hre.ethers.getContractFactory("Wallmart");
  const wallmartContract = await Wallmart.deploy();

  //   const [deployer] = await ethers.getSigners();
  //   const balance = await deployer.getBalance();
  //   const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  //   const marketplace = await Marketplace.deploy();

  await wallmartContract.deployed();
  console.log(`deployed to ${wallmartContract.address}`);
  //   const data = {
  //     address: wallmartContract.address,
  //     abi: JSON.parse(wallmartContract.interface.format('json'))
  //   }

  //   //This writes the ABI and address to the wallmartabi.json
  //   fs.writeFileSync('./src/wallmartabi.json', JSON.stringify(data))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});