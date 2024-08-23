import { NextResponse } from "next/server";
import Post from "@/models/post";
import dbConnect from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "You must be signed in" });
  }

  try {
    await dbConnect();
    const postData = await request.json();
    const { title, image, summary, category, body } = postData;

    if (!title || !image || !summary || !category || !body) {
      throw new Error("make sure all fields are filled");
    }

    const post = await Post.create({
      title: postData.title,
      image: postData.image,
      category: postData.category,
      summary: postData.summary,
      body: postData.body.trim().split(/\n+/),
    });
    return NextResponse.json({ data: post }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
