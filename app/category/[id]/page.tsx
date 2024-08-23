import Link from "next/link";

import { convertToTitleCase } from "@/lib/titlecase";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Posts from "@/components/blog/posts";
import { notFound } from "next/navigation";
import next from "next";

// export async function generateStaticParams() {
//   const res = await fetch(process.env.API_PATH + "/api/blog/posts");
//   const data = await res.json();

//   console.log(data);

//   return data.data.map((post: any) => ({
//     id: post.category.toLowerCase().split(" ").join("-"),
//   }));
// }

export async function generateStaticParams() {
  const posts = await fetch(process.env.API_PATH + "/api/blog/posts", {
    next: { revalidate: 0 },
  }).then((res) => res.json());

  return posts.data.map((post: any) => ({
    id: post.category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(process.env.API_PATH + "/api/blog/posts", {
    next: { revalidate: 0 },
  });
  const data = await res.json();

  const filtered = data.data.filter(
    (post: any) =>
      post.category.toLowerCase().split(" ").join("-") === params.id
  );

  const categoryList = data.data.map((post: any) =>
    post.category.toLowerCase().split(" ").join("-")
  );

  if (!categoryList.includes(params.id)) {
    notFound();
  }

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
            <BreadcrumbPage>
              {convertToTitleCase(filtered[0].category.toLowerCase())}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10">
        <Posts posts={filtered} />
      </div>
    </section>
  );
}
