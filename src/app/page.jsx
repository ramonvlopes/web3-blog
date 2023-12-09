"use client";

import PostCard from "@components/PostCard";
import Pagination from "@components/Pagination";
import { useEthers } from "@hooks/useEthers";
import Blog from "@abi/Blog.json";
// import { getContract } from "../../ethereum";
import { CONTRACT_ADDRESS } from "@common/constants/contract";
import { getContract } from "@utils/contract";
import { Wallet } from "ethers";

export default function Home() {
  const { provider } = useEthers();
  // const [posts, setPosts] = useState(0);

  // useEffect(() => {
  //   async function initContract() {
  //     const { provider, signer } = await initializeEthers();

  //     const contractInstance = new Contract(
  //       "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  //       Blog,
  //       provider
  //     );

  //     const contractInstanceSend = new Contract(
  //       "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  //       Blog,
  //       signer
  //     );

  //     const transaction = await contractInstanceSend.deposit(
  //       "http://127.0.0.1:8545/",
  //       { value: parseEther("0.1") }
  //     );
  //     await transaction.wait(1);

  //     setSignerContract(contractInstanceSend);
  //     setContract(contractInstance);

  //     const restaurantsArray = await contractInstanceSend.viewAllPosts();
  //     console.log(restaurantsArray);
  //   }

  //   initContract();
  // }, []);

  const createPost = async () => {
    const signer = new Wallet(
      "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
      provider
    );

    if (!signer) {
      alert("Signer not available");
      return;
    }

    const contract = getContract(signer);

    try {
      const tx = await contract.createPost("post.title", "post.content");
      await tx.wait();
      alert("Restaurant added successfully!");
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Failed to add restaurant");
    }
  };

  const viewPost = async () => {
    const contract = getContract(provider);

    const initialCount = await contract.viewAllPosts();

    console.log(initialCount);
    // setPosts(initialCount);
  };

  return (
    <main className="grid gap-8 grid-cols-3 p-4 sm:ml-64 mt-16">
      <button
        onClick={createPost}
        type="button"
        className="text-white bg-blue-700"
      >
        Create
      </button>
      <button
        onClick={viewPost}
        type="button"
        className="text-white bg-blue-700"
      >
        View
      </button>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <Pagination />
    </main>
  );
}
