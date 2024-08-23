"use client";

import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const chatContainer = useRef<HTMLDivElement>(null);

  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContainer.current as HTMLDivElement;
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <div className="space-y-8 self-end">
      <div
        ref={chatContainer}
        className="max-h-[300px] flex flex-col gap-[1.25rem] overflow-scroll"
      >
        {messages.map((m) => (
          <p
            key={m.id}
            className={
              m.role === "user"
                ? "whitespace-pre-wrap bg-[#4086f7] p-2 rounded-md text-white self-end max-w-[66%]"
                : "whitespace-pre-wrap bg-stone-100 p-2 rounded-md text-black self-start max-w-[66%]"
            }
          >
            <span>{m.content}</span>
          </p>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-2"
      >
        <Input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <Button variant="default">Submit</Button>
      </form>
    </div>
  );
}
