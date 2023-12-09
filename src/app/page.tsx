"use client";
import { useCallback, useEffect, useState } from "react";
import { Provider } from "ethers";
import PostCard from "@components/PostCard";
import { useEthers } from "@hooks/useEthers";
import { TPost } from "@models/posts.type";
import { getContract } from "@utils/contract";
import Link from "next/link";
import { ArrowIcon } from "@components/Icons";

export default function Home() {
  const { provider } = useEthers();
  const [listPost, setListPost] = useState<TPost[]>();

  useEffect(() => {
    const contract = getContract(provider as Provider);

    if (contract) {
      contract
        .viewAllPosts()
        .then((data) => {
          setListPost(
            data.map((items: any[]) => ({
              id: items[0],
              title: items[2],
              content: items[3],
            }))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [provider]);

  return (
    <main className="pt-8 pl-72 pr-8 mt-16 mb-8">
      <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        {listPost && listPost?.length > 0
          ? "All blog posts"
          : "Not found posts"}
      </h1>
      {listPost && !listPost?.length && (
        <Link
          href={`/new`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Click to create!
          <ArrowIcon />
        </Link>
      )}

      <div className="grid grid-cols-4 gap-4">
        {listPost?.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </main>
  );
}
