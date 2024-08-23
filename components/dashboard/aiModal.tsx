import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import Chat from "./chat";
const AiModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-red-50 p-5 rounded-md text-2xl font-medium text-left flex flex-col justify-between items-start gap-5">
          <div>
            <p className="text-2xl font-medium">Ask Blawg!</p>
            <p className="text-sm">
              Ask Blawg the AI helper for any blog troubles!
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-medium">🤖</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1024px] h-[482px]">
        <DialogHeader>
          <DialogTitle>Ask Blawg!</DialogTitle>
          <DialogDescription>
            {"Writer's"} block? Ask Blawg to give you some ideas or enhance what
            {"you're"} working on!
          </DialogDescription>
        </DialogHeader>
        <Chat />
      </DialogContent>
    </Dialog>
  );
};

export default AiModal;
