import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import SignOutButton from "./signOutButton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { convertToTitleCase } from "@/lib/titlecase";

import PostTable from "@/components/dashboard/postTable";
import AddPosts from "@/components/dashboard/addPosts";
import AiModal from "@/components/dashboard/aiModal";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const res = await fetch(process.env.API_PATH + "/api/blog/posts", {
    next: { revalidate: 0 },
  });
  const data = await res.json();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="mx-auto relative max-w-[1440px] my-10 font-josefin">
      <header className="flex items-center justify-between p-5">
        <h2 className="text-2xl font-medium">Hi, {session?.user?.name} 👋🏼</h2>
      </header>
      <section className="p-5">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AddPosts />
          <div className="bg-violet-50 p-5 rounded-md space-y-5">
            <div>
              <p className="text-2xl font-medium">Total Posts</p>
              <p className="text-sm">
                A count of every post {"you've"} written!
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-medium">{data.data.length}</p>
            </div>
          </div>
          <AiModal />
          <SignOutButton />
        </section>
      </section>
      <div className="p-5 space-y-5">
        <p className="text-2xl font-medium">Your Posts</p>
      </div>
      <main className="w-full p-5">
        <PostTable posts={data} />
      </main>
    </div>
  );
}
