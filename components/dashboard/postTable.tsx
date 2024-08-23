import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import Options from "@/components/dashboard/options";

import moment from "moment";
import { format_date } from "@/lib/formatDate";

const PostTable = ({ posts }: { posts: any }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4 min-w-[200px]">Title</TableHead>
          <TableHead className="">Date</TableHead>
          <TableHead className="">Category</TableHead>
          <TableHead className="min-w-[250px]">Summary</TableHead>
          <TableHead className="text-right ">Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.data.map((post: any, i: any) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{format_date(post.createdAt)}</TableCell>
            <TableCell>{post.category}</TableCell>
            <TableCell>{post.summary.slice(0, 75)}...</TableCell>
            <TableCell className="text-right">
              <Options post={post} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PostTable;
