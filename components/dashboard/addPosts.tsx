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

import dbConnect from "@/lib/mongodb";
import Post from "@/models/post";
import { revalidatePath } from "next/cache";

import AddPostForm from "./addPostForm";

const AddPosts = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-green-50 p-5 rounded-md text-2xl font-medium text-left flex flex-col justify-between items-start gap-5">
          <div>
            <p className="text-2xl font-medium">Add Post</p>
            <p className="text-sm">Click here to create a post!</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-medium">➕</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1024px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>
            Add a post to your blog here. Click add when {"you're"} done.
          </DialogDescription>
        </DialogHeader>
        <AddPostForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddPosts;
