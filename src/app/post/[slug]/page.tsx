"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "ethers";
import { useEthers } from "@hooks/useEthers";
import { TPost } from "@models/posts.type";
import { getContract } from "@utils/contract";

export default function PostDetails() {
  const params = usePathname();
  const { provider } = useEthers();
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const contract = getContract(provider as Provider);

    if (contract) {
      contract
        .viewPost(params.split("/")[2])
        .then((data) => {
          setPost({
            id: data[0],
            title: data[2],
            content: data[3],
          });
        })
        .catch((err) => console.log(err));
    }
  }, [provider, params]);

  return (
    <main className="pl-80 pr-16 pt-32">
      <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        {post?.title}
      </h1>
      <p className="text-lg font-normal text-gray-500">{post?.content}</p>
    </main>
  );
}
