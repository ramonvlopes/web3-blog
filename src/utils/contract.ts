import { Contract } from "ethers";
import Blog  from "@abi/Blog.json";
import { CONTRACT_ADDRESS } from "@common/constants/contract";
import { Signer, Provider } from "ethers";

export function getContract(signerOrProvider: Signer | Provider): Contract {
  return new Contract(CONTRACT_ADDRESS, Blog, signerOrProvider);
}
