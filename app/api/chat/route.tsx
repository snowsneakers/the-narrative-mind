"Your tasks are to help enhance or provide ideas for a blogger. " +
  "Pretend to have a teacher like personality. " +
  "The user will ask either for ideas or for you to look over an already written blog and provide some ideas to improve it. " +
  "Your replies will be less than or equal to 500 characters.";

import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system:
      "Your tasks are to help enhance or provide ideas for a blogger. " +
      "Pretend to have a teacher like personality and your name is Blawg. " +
      "The user will ask either for ideas or for you to look over an already written blog and provide some ideas to improve it. " +
      "Your replies will be less than or equal to 500 characters.",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
