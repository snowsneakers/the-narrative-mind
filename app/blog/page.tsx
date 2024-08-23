import Link from "next/link";

import Posts from "@/components/blog/posts";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Hero = () => {
  return (
    <section className="rounded-md col-span-3">
      <div className="space-y-3 text-josefin">
        <div>
          <p>
            <span className="font-quote text-4xl font-medium">The Blog</span>
          </p>
          <p className="font-[300] text-lg">[thuh] [blawg]</p>
        </div>
        <p className="font-josefin font-[300] text-lg text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis, illo provident! Quo vel blanditiis sint placeat eum
          dolorem? Natus dicta reiciendis expedita sit alias, maiores esse eum,
          nobis incidunt neque odit? Maxime necessitatibus recusandae obcaecati
          iste exercitationem eveniet perferendis architecto nihil, sequi nulla
          tempora deserunt, quia iusto natus in voluptate.
        </p>
        <div>
          {/* <Link href="/" className="w-full">
            <Button
              variant="default"
              className="w-full sm:w-auto bg-[#0000000c]"
            >
              About the Author
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default async function Blog() {
  const res = await fetch(process.env.API_PATH + "/api/blog/posts", {
    next: { revalidate: 0 },
  });
  const data = await res.json();

  const filtered = data.data.slice(0, 4);

  return (
    <div className="space-y-10 pb-10 max-w-[1130px] mx-auto my-10 px-5 font-josefin">
      <Hero />
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link href="/blog/posts" className="text-sm">
          All Posts
        </Link>
      </div>
      <Posts posts={filtered} />
    </div>
  );
}
