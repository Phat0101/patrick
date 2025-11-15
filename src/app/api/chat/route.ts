import { streamText } from "ai";
// import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const messageContent = messages[messages.length - 1].content;

  // Read the content of the Markdown file
  const resumeDirectory = path.join(process.cwd(), 'public');
  const resumeContent = await fs.readFile(resumeDirectory + '/Patrick_Resume.md', 'utf-8');

  try {
    const response = await streamText({
      // model: openai('gpt-4o-mini'),
      model: google('gemini-2.5-flash-lite'),
      system: `You are a helpful assistant. You will role play as me (Patrick). 
      You will be responsible for answering questions about me based on the following resume:\n\n${resumeContent}. 
      Answer in English (unless state otherwise) and try to keep under 150 words if possible
      Your tone shoulb be positive, hustling, try to be humble and not boastful.`,
      messages: [
        { role: "user", content: messageContent },
      ],
    });
  
    console.log(messages);
  
    return response.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}