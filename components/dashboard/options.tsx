import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/app/blog/squidward/deleteButton";
import UpdatePostForm from "./updatePostForm";

const Options = (post: any) => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-2xl">...</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Post Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DialogTrigger asChild>
              <button>✏️ Update</button>
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DeleteButton post={post} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[1024px]">
        <DialogHeader>
          <DialogTitle>Post Options</DialogTitle>
          <DialogDescription>
            Update or delete your blog post. Click update when {"you're"} done
            to apply changes. Click delete post if you would like to remove
            post.
          </DialogDescription>
        </DialogHeader>
        <UpdatePostForm post={post} />
      </DialogContent>
    </Dialog>
  );
};

export default Options;
