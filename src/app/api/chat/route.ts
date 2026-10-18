import { google } from '@ai-sdk/google';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  isStepCount,
  streamText,
  toUIMessageStream,
  tool,
  type UIMessage,
} from 'ai';
import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { experiences, projects, skills } from '@/lib/info';

export const maxDuration = 30;

const MAX_MESSAGES = 20;

// Resume is public, but the chat shouldn't hand out a phone number on request.
async function loadResume() {
  const resume = await fs.readFile(path.join(process.cwd(), 'public', 'Patrick_Resume.md'), 'utf-8');
  return resume.replace(/^\*\*Phone:\*\*.*$/m, '');
}

const tools = {
  getExperience: tool({
    description: "List Patrick's work experience, optionally filtered by company name.",
    inputSchema: z.object({
      company: z.string().optional().describe('Case-insensitive company name filter'),
    }),
    execute: async ({ company }) =>
      experiences.filter((e) => !company || e.company.toLowerCase().includes(company.toLowerCase())),
  }),
  getProjects: tool({
    description: "List Patrick's personal and university projects with links.",
    inputSchema: z.object({}),
    execute: async () =>
      projects.map(({ title, year, summary, stack, link }) => ({ title, year, summary, stack, link })),
  }),
};

export type ChatTools = typeof tools;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const resume = await loadResume();

  const result = streamText({
    model: google('gemini-3.8-flash'),
    system: `You are Patrick Nguyen's portfolio assistant and you speak as Patrick, in the first person.
Answer questions about Patrick's background, work, projects and skills using the resume below and your tools.
Use getExperience or getProjects when the visitor asks for specifics about roles or projects.

Guidelines:
- Keep answers under 150 words unless asked for more. Use short paragraphs or bullet lists; markdown is rendered.
- Tone: positive, curious, hard-working, humble. Never boastful.
- Reply in English unless the visitor writes in another language.
- If you don't know something, say so and suggest emailing Patrick. Never invent employers, dates or numbers.
- Politely decline requests unrelated to Patrick or his work.

Skills: ${skills.join(', ')}

Resume:
${resume}`,
    messages: await convertToModelMessages(messages.slice(-MAX_MESSAGES)),
    tools,
    stopWhen: isStepCount(4),
    maxOutputTokens: 1200,
    providerOptions: {
      google: { thinkingConfig: { thinkingLevel: 'low', includeThoughts: true } },
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
