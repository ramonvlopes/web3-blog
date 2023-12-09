"use client";
import { useCallback, useEffect, useState } from "react";
import { Provider } from "ethers";
import PostCard from "@components/PostCard";
import { useEthers } from "@hooks/useEthers";
import { TPost } from "@models/posts.type";
import { getContract } from "@utils/contract";

export default function Home() {
  const { provider } = useEthers();
  const [listPost, setListPost] = useState<TPost[]>();
  
  useEffect(() => {
    const contract = getContract(provider as Provider);
  
    if (contract) {
      contract.viewAllPosts().then((data) => {
        setListPost(
          data.map((items: any[]) => ({
            title: items[2],
            content: items[3],
          }))
        );
      })
      .catch(err => console.log(err));
    }
  }, [provider]);

  return (
    <main className="grid gap-8 grid-cols-3 p-4 ml-64 mt-16">
      {listPost?.map((post) => (
        <PostCard key={post.title} {...post} />
      ))}
    </main>
  );
}
