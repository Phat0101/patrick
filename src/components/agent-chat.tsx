"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import type { InferUITools, UIDataTypes, UIMessage } from "ai";
import { ArrowUpIcon, BriefcaseIcon, CircleCheckIcon, FolderGitIcon, LoaderCircleIcon, RotateCwIcon, SquareIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Streamdown } from "streamdown";

import type { ChatTools } from "@/app/api/chat/route";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group";
import { Message, MessageContent } from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/trace";
import { cn } from "@/lib/utils";
import portrait from "../../public/profile-squared.png";

type ChatMessage = UIMessage<unknown, UIDataTypes, InferUITools<ChatTools>>;
type ChatPart = ChatMessage["parts"][number];
type ToolPart = Extract<ChatPart, { type: `tool-${string}` }>;

const SUGGESTIONS = ["What do you build at Clear.ai?", "Tell me about TariffChat", "What's your tech stack?", "Show me your side projects"];

const MAX_INPUT = 1000;

function getText(message: ChatMessage) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function AgentChat({ className }: { className?: string }) {
  const { messages, sendMessage, setMessages, status, stop, error, regenerate } = useChat<ChatMessage>();
  const [input, setInput] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);
  const reduceMotion = useReducedMotion();

  const busy = status === "submitted" || status === "streaming";
  const canSend = input.trim().length > 0 && !busy;

  function send(text: string) {
    const trimmed = text.trim().slice(0, MAX_INPUT);
    if (!trimmed || busy) return;
    void sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <MessageScrollerProvider autoScroll>
      <section
        aria-label="Chat with Patrick's AI agent"
        className={cn(
          "flex flex-col overflow-hidden rounded-xl border bg-card shadow-[0_1px_2px_oklch(0.2_0.01_60/0.05),0_12px_32px_oklch(0.2_0.01_60/0.06)]",
          className,
        )}
      >
        <header className="flex h-11 shrink-0 items-center gap-2 border-b px-4 text-sm">
          <span className={cn("size-1.5 rounded-full bg-success", busy && "animate-pulse")} aria-hidden />
          <span className="font-medium">Ask my agent</span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">gemini-3.8-flash</span>
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="ml-auto text-muted-foreground"
              aria-label="Start a new conversation"
              onClick={() => {
                stop();
                setMessages([]);
              }}
            >
              <RotateCwIcon />
            </Button>
          )}
        </header>

        <div className="min-h-0 flex-1">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col justify-between gap-4 p-4">
              <div className="flex items-center gap-3 rounded-lg border bg-surface-sunk p-3">
                <Image src={portrait} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
                <div className="min-w-0 text-sm">
                  <p className="font-medium">Patrick&apos;s agent</p>
                  <p className="truncate text-xs text-muted-foreground">Trained on my résumé and projects</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                  <p className="text-[15px] leading-relaxed">
                    Hi, I&apos;m Patrick&apos;s agent. Ask me about his work at Clear.ai, his projects or how he builds with AI.
                  </p>
                  <p className="text-xs text-muted-foreground">Answers come from his résumé and project notes.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => send(suggestion)}
                      className="rounded-full border bg-background px-3 py-1.5 text-left text-[13px] text-text-secondary transition-colors hover:border-input hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent aria-busy={busy} aria-live="polite" className="gap-5 px-4 py-4">
                  {messages.map((message, index) => {
                    const isLast = index === messages.length - 1;

                    if (message.role === "user") {
                      return (
                        <motion.div
                          key={message.id}
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                        >
                          <MessageScrollerItem messageId={message.id} scrollAnchor>
                            <Message align="end">
                              <MessageContent>
                                <Bubble align="end" variant="muted">
                                  <BubbleContent>{getText(message)}</BubbleContent>
                                </Bubble>
                              </MessageContent>
                            </Message>
                          </MessageScrollerItem>
                        </motion.div>
                      );
                    }

                    const streaming = busy && isLast;
                    const steps = message.parts.filter(
                      (part): part is Extract<ChatPart, { type: "reasoning" }> | ToolPart =>
                        part.type === "reasoning" || part.type.startsWith("tool-"),
                    );
                    const reply = getText(message);

                    return (
                      <MessageScrollerItem key={message.id} messageId={message.id}>
                        <Message>
                          <MessageContent className="gap-3">
                            {steps.length > 0 && (
                              <Trace>
                                {steps.map((part, i) =>
                                  part.type === "reasoning" ? (
                                    <ReasoningRow key={i} text={part.text} running={part.state === "streaming"} />
                                  ) : (
                                    <ToolRow key={i} part={part} streaming={streaming} />
                                  ),
                                )}
                              </Trace>
                            )}
                            {reply && (
                              <Streamdown
                                mode={streaming ? "streaming" : "static"}
                                isAnimating={streaming}
                                className="text-sm leading-relaxed [&_a]:text-cobalt [&_a]:underline [&_a]:underline-offset-2 [&_ul]:my-2 [&_li]:my-0.5 [&_li_p]:my-0"
                              >
                                {reply}
                              </Streamdown>
                            )}
                          </MessageContent>
                        </Message>
                      </MessageScrollerItem>
                    );
                  })}
                  {status === "submitted" && (
                    <TraceLine status="running">
                      <TraceIcon>
                        <LoaderCircleIcon className="animate-spin" />
                      </TraceIcon>
                      <TraceTitle>Thinking</TraceTitle>
                    </TraceLine>
                  )}
                  {error && (
                    <div className="flex items-center gap-3 text-sm text-destructive">
                      <span>The agent couldn&apos;t answer that. Try again in a moment.</span>
                      <Button variant="outline" size="xs" onClick={() => regenerate()}>
                        Retry
                      </Button>
                    </div>
                  )}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          )}
        </div>

        <form
          ref={formRef}
          className="shrink-0 p-3 pt-0"
          onSubmit={(event) => {
            event.preventDefault();
            send(input);
          }}
        >
          <InputGroup className="bg-background">
            <InputGroupTextarea
              value={input}
              maxLength={MAX_INPUT}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about my work…"
              aria-label="Message"
              rows={1}
              className="max-h-32 min-h-11 text-[15px] md:text-sm"
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
                  event.preventDefault();
                  formRef.current?.requestSubmit();
                }
              }}
            />
            <InputGroupAddon align="inline-end" className="self-end pb-1.5">
              {busy ? (
                <InputGroupButton type="button" variant="outline" size="icon-sm" aria-label="Stop" onClick={() => stop()}>
                  <SquareIcon className="fill-current" />
                </InputGroupButton>
              ) : (
                <InputGroupButton type="submit" variant="default" size="icon-sm" disabled={!canSend} aria-label="Send">
                  <ArrowUpIcon />
                </InputGroupButton>
              )}
            </InputGroupAddon>
          </InputGroup>
        </form>
      </section>
    </MessageScrollerProvider>
  );
}

function ReasoningRow({ text, running }: { text: string; running: boolean }) {
  const [open, setOpen] = React.useState<boolean>();
  if (!text && !running) return null;

  return (
    <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
      <TraceCollapsibleTrigger>
        <TraceLine status={running ? "running" : undefined}>
          <TraceIcon>{running ? <LoaderCircleIcon className="animate-spin" /> : <CircleCheckIcon />}</TraceIcon>
          <TraceTitle>{running ? "Thinking" : "Thought it through"}</TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="border-l pl-3 text-[13px] whitespace-pre-wrap italic">{text}</TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

const TOOL_LABELS: Record<string, { running: string; done: string; icon: React.ReactNode }> = {
  "tool-getExperience": { running: "Looking up experience", done: "Checked experience", icon: <BriefcaseIcon /> },
  "tool-getProjects": { running: "Looking up projects", done: "Checked projects", icon: <FolderGitIcon /> },
};

function ToolRow({ part, streaming }: { part: ToolPart; streaming: boolean }) {
  const label = TOOL_LABELS[part.type] ?? { running: "Working", done: "Done", icon: <CircleCheckIcon /> };
  const done = part.state === "output-available";
  const failed = part.state === "output-error" || (!done && !streaming);

  return (
    <TraceLine status={failed ? "error" : done ? undefined : "running"}>
      <TraceIcon>{label.icon}</TraceIcon>
      <TraceTitle>{failed ? "Couldn't look that up" : done ? label.done : label.running}</TraceTitle>
    </TraceLine>
  );
}
