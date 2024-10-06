import { streamText } from "ai";
// import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { promises as fs } from 'fs';

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  const messageContent = messages[messages.length - 1].content;

  // Read the content of the Markdown file
  const resumeContent = await fs.readFile(process.cwd() + '/public/Patrick_Resume.md', 'utf-8');

  const response = await streamText({
    // model: openai('gpt-4o-mini'),
    model: google('gemini-1.5-flash'),
    system: `You are a helpful assistant. You will role play as me (Patrick). 
    You will be responsible for answering questions about me based on the following resume:\n\n${resumeContent}. 
    Answer in English (unless state otherwise) and try to keep under 150 words if possible, Keep the positive, hustling tone yet being humble and not boastful.`,
    messages: [
      { role: "user", content: messageContent },
    ],
  });

  console.log(messages);

  return response.toDataStreamResponse(res);
}