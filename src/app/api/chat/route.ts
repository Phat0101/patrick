import { streamText, 
  // Message 
} from "ai";
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  const messageContent = messages[messages.length - 1].content;  
  const response = await streamText({
    model: openai('gpt-4o-mini'),
    system: "You are a helpful assistant. You will be responsible for answering questions and providing information whatever I ask.",
    messages: [
      { role: "user", content: messageContent },
    ],
  });
  console.log(messages);

  return response.toDataStreamResponse(res);
}