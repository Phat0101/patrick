"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { sendEmail } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/info";

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>(null);
  const [pending, startTransition] = React.useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const response = await sendEmail(formData);
      if (response.error) {
        setStatus({ type: "error", message: "Your message didn't send. Check your email address and try again." });
      } else {
        setStatus({ type: "success", message: "Message sent. I'll reply within a couple of days." });
        form.reset();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Your email
        </label>
        <Input id="email" name="email" type="email" required maxLength={50} placeholder="you@company.com" className="h-10 bg-card" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={500}
          rows={5}
          placeholder="What are you working on?"
          className="bg-card"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={pending} className="h-10 rounded-full px-5">
          {pending ? "Sending…" : "Send message"}
        </Button>
        {status && (
          <p role="status" className={status.type === "error" ? "text-sm text-destructive" : "text-sm text-success"}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}

export function CopyEmail() {
  const [copied, setCopied] = React.useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      className="h-10 justify-between gap-3 rounded-full bg-card px-4 font-mono text-[13px]"
      onClick={() => {
        navigator.clipboard
          .writeText(profile.email)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          })
          .catch(() => {});
      }}
    >
      {profile.email}
      {copied ? <CheckIcon className="text-success" /> : <CopyIcon className="text-muted-foreground" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </Button>
  );
}
