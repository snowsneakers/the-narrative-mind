import Link from "next/link";
import { Button } from "@/components/ui/button";
import Posts from "@/components/blog/posts";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function BlogPosts() {
  const res = await fetch(process.env.API_PATH + "/api/blog/posts");
  const data = await res.json();

  const firstPage = data.data.slice(0, 5);

  return (
    <section className="space-y-10 mt-10 max-w-[1130px] mx-auto my-10 px-5 font-josefin">
      <img
        src="/assets/logoshort.svg"
        alt="The Narrative Mind logo"
        className="w-[75px]"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Posts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 my-10">
        <Posts posts={firstPage} />
      </div>
    </section>
  );
}
