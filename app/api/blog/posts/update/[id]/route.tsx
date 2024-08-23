import { NextResponse } from "next/server";
import Post from "@/models/post";
import dbConnect from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  const id = request.url.split("/")[request.url.split("/").length - 1];

  const postData = await request.json();

  if (!session) {
    return NextResponse.json({ message: "You must be signed in" });
  }

  try {
    await dbConnect();
    const post = await Post.findById(id);
    if (!post) {
      throw Error("Entry not found");
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title: postData.title,
        image: postData.image,
        category: postData.category,
        summary: postData.summary,
        body: postData.body.trim().split(/\n+/),
      },
      { new: true }
    );
    return NextResponse.json(updatedPost);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
