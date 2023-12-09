import { ethers } from "hardhat";

async function main(): Promise<string> {
  const contract = await ethers.deployContract("Blog");

  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log(`Deployed to ${address}.`);
  return address;
}

main()
  .then((address) => {
    console.log(address); // This will print the address to stdout
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });