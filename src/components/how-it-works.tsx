"use client";

import * as React from "react";
import { MessageSquare, MessageSquareText, Clock4 } from "lucide-react";
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
}];


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

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              role="listitem"
              aria-label={`${idx + 1}. ${step.title}`}
              className="group relative rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md">
              {/* Connector lines */}
              {idx < steps.length - 1 ? (
                <>
                  {/* Horizontal connector for lg+ */}
                  <div
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-border lg:block"
                    aria-hidden="true" />
                  {/* Vertical connector for mobile */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 h-4 w-px translate-y-full -translate-x-1/2 bg-border lg:hidden"
                    aria-hidden="true" />
                </>
              ) : null}

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground ring-1 ring-border transition-colors group-hover:bg-accent/90">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 min-w-5 sm:h-6 sm:min-w-6 items-center justify-center rounded-full bg-secondary px-2 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                      {idx + 1}
                    </span>
                    <h3 className="truncate text-sm sm:text-base font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-1 break-words text-xs sm:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-6 max-w-3xl text-center">
        <p className="text-xs text-muted-foreground sm:text-sm">
          
        </p>
      </div>
    </section>);

}