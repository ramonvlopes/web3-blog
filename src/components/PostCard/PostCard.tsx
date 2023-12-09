import Image from "next/image";
import Link from "next/link";
import { TPostProps } from "./types";
import { ArrowIcon } from "@components/Icons";

function PostCard({ id, title, content}: TPostProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800">
      <Link href={`/post/${id}`}>
      <Image
          src="/assets/post-image-temp.jpg"
          alt="Vercel Logo"
          className="rounded-t-lg"
          width={380}
          height={255}
          priority
        />
      </Link>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content.slice(0, 50)}
        </p>
        <Link
          href={`/post/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Read more
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export default PostCard
