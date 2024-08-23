import Link from "next/link";
import { Button } from "@/components/ui/button";
import { convertToTitleCase } from "@/lib/titlecase";
import { data } from "@/lib/dummyData";
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

export async function generateStaticParams({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(process.env.API_PATH + "/api/blog/posts");
  const data = await res.json();

  return data.data.map((post: any) => {
    return {
      id: post._id,
    };
  });
}

export default async function SoloPost({ params }: { params: { id: string } }) {
  const res = await fetch(process.env.API_PATH + "/api/blog/posts");
  const data = await res.json();

  const postList = data.data.map((post: any) => post._id);

  if (!postList.includes(params.id)) {
    notFound();
  }

  const filtered = data.data.filter(
    (post: any) => post._id.toLowerCase() === params.id.toLowerCase()
  );
  //   const updatedDate = moment(filtered[0].createdAt).format("MMM YY");
  const otherPostsSameCategory = data.data
    .filter(
      (post: any) =>
        post._id.toLowerCase() !== filtered[0]._id.toLowerCase() &&
        post.category.toLowerCase() === filtered[0].category.toLowerCase()
    )
    .slice(0, 2);

  return (
    <section className="max-w-[1130px] mx-auto my-10 px-5 font-josefin">
      <div className="space-y-10 mt-10">
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-5">
          <img
            src="/assets/logoshort.svg"
            alt="The Narrative Mind logo"
            className="w-[75px]"
          />
        </div>
        <Breadcrumb className="-mb-[5px]">
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
              <BreadcrumbLink
                href={`/category/${filtered[0].category
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
              >
                {convertToTitleCase(filtered[0].category.toLowerCase())}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>
                {convertToTitleCase(filtered[0].title)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <img
          className="rounded-sm w-full aspect-[16/9] object-cover"
          src={filtered[0].image}
          alt={filtered[0].title}
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-medium">
            {filtered[0].title}
          </h1>
        </div>
        <div className="pb-[100px] space-y-5">
          {filtered[0].body.map((paragraph: string, i: any) => {
            return (
              <p
                key={i}
                className="whitespace-pre-wrap font-josefin text-md sm:text-xl font-[300]"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      {otherPostsSameCategory.length > 0 ? (
        <div className="space-y-5">
          <p className="text-xl">More Like This</p>
          <Posts posts={otherPostsSameCategory} />
        </div>
      ) : null}
    </section>
  );
}
