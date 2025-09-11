"use client";

import * as React from "react";
import { MessageSquare, MessageSquareText, Clock4, FileQuestionMark, SeparatorHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export interface HowItWorksSectionProps {
  className?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
{
  id: "ask",
  title: "Ask a question",
  description: "Type your health question in simple words.",
  icon: MessageSquare
},
{
  id: "advice",
  title: "Get clear advice",
  description: "Receive easy, step‑by‑step guidance.",
  icon: MessageSquareText
},
{
  id: "reminders",
  title: "Set reminders",
  description: "Never miss medicine or checkups.",
  icon: Clock4
},
{
  id: "emergency",
  title: "Emergency info",
  description: "Know what to do and who to call.",
  icon: FileQuestionMark
}];


function ChatMockup() {
  return (
    <div
      aria-label="Example chat screen"
      className="relative mx-auto w-full max-w-[420px] rounded-[1.25rem] bg-card shadow-sm ring-1 ring-border">

      <div className="flex items-center justify-between rounded-t-[1.25rem] border-b border-border bg-secondary/60 px-4 py-3">
        <div className="h-2 w-16 rounded-full bg-muted" aria-hidden="true" />
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-muted" />
          <span className="h-2 w-2 rounded-full bg-muted" />
          <span className="h-2 w-2 rounded-full bg-muted" />
        </div>
      </div>

      <div className="space-y-2.5 p-4">
        <div className="flex max-w-[85%] items-end gap-2">
          <div className="shrink-0 rounded-full bg-accent p-2 text-primary/80" aria-hidden="true">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm leading-snug text-foreground/90 !w-[290px] !h-full">
            I have a fever. What should I do?
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-sm leading-snug text-primary-foreground shadow-sm !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-[235px] !h-full !max-w-[235px] !whitespace-pre-line">I have a fever what should I do?

          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-full bg-accent px-3 py-1.5 text-xs text-accent-foreground shadow-sm">
            Reminder set: Check temperature at 6pm
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="shrink-0 rounded-full bg-accent p-2 text-primary/80" aria-hidden="true">
            <FileQuestionMark className="h-4 w-4" />
          </div>
          <div className="max-w-[85%] space-y-1.5">
            <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm leading-snug text-foreground/90">
              If you have chest pain or trouble breathing:
            </div>
            <div className="rounded-lg bg-secondary px-3 py-2 text-xs leading-snug text-foreground">
              • Call local emergency number 108{" "}
              <span className="text-muted-foreground">(India)</span>
              <br />• Go to the nearest clinic immediately
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2 rounded-full border border-input bg-background/60 px-3 py-2">
            <span className="text-xs text-muted-foreground">Type your message…</span>
            <div className="ml-auto h-6 w-12 rounded-full bg-primary/10" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-black/0 transition-[box-shadow,transform] duration-200" />
    </div>);

}

export default function HowItWorksSection({
  className,
  steps = defaultSteps
}: HowItWorksSectionProps) {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className={cn(
        "w-full rounded-2xl bg-card/70 p-4 shadow-sm ring-1 ring-border sm:p-6",
        className
      )}>

      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="how-it-works-heading"
          className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">

          How the chatbot helps you
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Simple steps. Clear answers. Support when you need it.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:mt-8 md:grid-cols-4 md:gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              role="listitem"
              aria-label={`${idx + 1}. ${step.title}`}
              className="group relative rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md">

              {/* Connector lines */}
              {idx < steps.length - 1 ?
              <>
                  {/* Horizontal connector for md+ */}
                  <div
                  className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-border md:block"
                  aria-hidden="true" />

                  {/* Vertical connector for mobile */}
                  <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-4 w-px translate-y-full -translate-x-1/2 bg-border md:hidden"
                  aria-hidden="true" />

                </> :
              null}

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground ring-1 ring-border transition-colors group-hover:bg-accent/90">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-secondary px-2 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                      {idx + 1}
                    </span>
                    <h3 className="truncate text-base font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-1 break-words text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>);

        })}
      </div>

      <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
        <div className="mb-3 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:text-sm">
          <SeparatorHorizontal className="h-4 w-4 opacity-60" aria-hidden="true" />
          <span>See an example conversation</span>
          <SeparatorHorizontal className="h-4 w-4 opacity-60" aria-hidden="true" />
        </div>
        <ChatMockup />
      </div>

      <div className="mx-auto mt-6 max-w-3xl text-center">
        <p className="text-xs text-muted-foreground sm:text-sm">
          Your privacy is protected. The chatbot gives information, not a diagnosis. For serious symptoms, contact a
          medical professional.
        </p>
      </div>
    </section>);

}