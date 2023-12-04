import { ethers } from "hardhat";

async function main() {
  const Blog = await ethers.getContractFactory("Blog");
  const blog = await Blog.deploy();

  console.log("Contract deployed to:", blog);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });