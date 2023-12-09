import Image from "next/image";
import { TPostProps } from "./types";
import { ArrowIcon } from "@components/Icons";

function PostCard({ title, content}: TPostProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
      <a href="#">
      <Image
          src="/assets/post-image-temp.jpg"
          alt="Vercel Logo"
          className="rounded-t-lg"
          width={380}
          height={255}
          priority
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content.slice(0, 50)}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Read more
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

export default PostCard
