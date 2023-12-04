'use client'

import { useEffect, useState } from "react";
import { getContract } from "../../ethereum";
import Blog from "@abi/Blog.json";
import PostCard from "@components/PostCard";
import Pagination from "@components/Pagination";

export default function Home() {
  const [posts, setPosts] = useState(0);
  const [contract, setContract] = useState();

  useEffect(() => {
    async function initContract() {
      const blogOperations = getContract(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        Blog,
        0 // Use the first account as the signer
      );

      setContract(blogOperations);

      const initialCount = await blogOperations.viewAllPosts();
      setPosts(initialCount);
    }
  
    initContract();
  }, []);

  console.log('posts', posts)

  return (
    <main className="grid gap-8 grid-cols-3 p-4 sm:ml-64 mt-16">
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
