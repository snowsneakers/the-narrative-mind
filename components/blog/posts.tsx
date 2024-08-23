import Link from "next/link";
import { Button } from "../ui/button";

export default function Posts({ posts }: { posts: any }) {
  return (
    <section className="space-y-5 col-span-3 bento">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10">
        {posts.map((post: any, i: any) => {
          return (
            <div
              key={post._id}
              className="flex flex-col gap-5 last:border-none"
            >
              <div className="relative">
                <Link href={`/post/${post._id}`}>
                  <img
                    className="rounded-sm w-full aspect-[16/9] object-cover"
                    src={post.image}
                    alt="thumbnail"
                  />
                </Link>
                <Link
                  className="text-gray-600 dark:text-gray-400 font-medium text-xs absolute bottom-0 left-0 bg-white/80 uppercase p-2 rounded-tr block"
                  href={`/category/${post.category
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                >
                  {post.category}
                </Link>
              </div>
              <div className="w-full flex flex-col justify-between h-auto space-y-3">
                <h2 className="font-medium text-xl">
                  <Link href={`/post/${post._id}`}>{post.title}</Link>
                </h2>
                <p className="font-josefin text-md sm:text-lg font-[300] text-gray-700">
                  {post.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
