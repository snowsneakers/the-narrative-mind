import { NextResponse } from "next/server";
import Post from "@/models/post";
import dbConnect from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  const id = request.url.split("/")[request.url.split("/").length - 1];
  if (!session) {
    return NextResponse.json({ message: "You must be signed in" });
  }

  try {
    await dbConnect();
    const post = await Post.findById(id);
    if (!post) {
      throw Error("Entry not found");
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    return NextResponse.json({ data: deletedPost });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
