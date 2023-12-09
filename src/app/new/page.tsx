"use client";

import React, { useState } from "react";
import { Wallet } from "ethers";
import { toast } from 'react-toastify';
import { useEthers } from "@hooks/useEthers";
import { getContract } from "@utils/contract";

export default function NewPost() {
  const { provider } = useEthers();
  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState<string>()

  const createPost = async () => {
    const signer = new Wallet(
      "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
      provider
    );

    if (!signer) {
      return;
    }

    const contract = getContract(signer);

    try {
      const tx = await contract.createPost(title, content);
      await tx.wait();

      toast.success('Created new post!')
    } catch (error) {
      toast.error(`Error adding the post: ${error}`);
    }
  };

  return (
    <main className="p-4 sm:ml-64 mt-16">
      <div className="max-w-lg mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 text-gray-900 block w-full rounded-lg p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Content
          </label>
          <input
            type="text"
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 text-gray-900 block w-full rounded-lg p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={createPost}
        >
          Create new post
        </button>
      </div>
    </main>
  );
}
