"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteButton = ({ post }: { post: any }) => {
  const router = useRouter();
  const handleDelete = async (post_id: any) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    try {
      if (!confirmed) {
        toast.error("post not deleted");
        return;
      }

      const response = await fetch(`/api/blog/posts/delete/${post_id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.error) {
        toast.error("post not deleted");
        return;
      }

      router.refresh();
      toast.success("Post Deleted!");
    } catch (error: any) {
      // toast.error(error.message);
      console.log(error.message);
    }
  };

  return <button onClick={() => handleDelete(post.post._id)}>🗑️ Delete</button>;
};

export default DeleteButton;
