"use client";

import * as React from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  MessageCircleQuestionMark,
  FileHeart,
  Hospital,
  MonitorSmartphone,
  ScanQrCode } from
"lucide-react";
import { Button } from "@/components/ui/button";

type ValuePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export interface HomepageHeroProps {
  className?: string;
  style?: CSSProperties;
  onStart?: () => void;
  onChat?: () => void;
  headline?: string;
  subheadline?: string;
  values?: ValuePoint[];
}

const defaultValues: ValuePoint[] = [
{
  icon: MonitorSmartphone,
  title: "24/7 Availability",
  description: "Health answers anytime, even offline-friendly tips."
},
{
  icon: Hospital,
  title: "Reliable Information",
  description: "Trusted, evidence-based public health advice."
},
{
  icon: MessageCircleQuestionMark,
  title: "Multilingual Support",
  description: "Understands local languages and simple terms."
},
{
  icon: Smartphone,
  title: "Your Privacy First",
  description: "Your chats stay safe and confidential."
}];


function clsx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function HomepageHero({
  className,
  style,
  onStart,
  onChat,
  headline = "Accessible health information for every community",
  subheadline = "A trustworthy AI health assistant for rural and semi-urban families — clear answers, practical steps, and local language support.",
  values = defaultValues
}: HomepageHeroProps) {
  // Add simple local chat state for the in-page widget
  const [messages, setMessages] = React.useState<
    {role: "assistant" | "user";content: string;}[]>(
    [
    {
      role: "assistant",
      content:
      "Hi! I'm Vitual AI. How can I help you with your health question today?"
    }]
  );
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [yesNoQ, setYesNoQ] = React.useState<string | null>(null);
  const [followUps, setFollowUps] = React.useState<string[]>([]);

  const handleSend = async (e?: React.FormEvent, overrideText?: string) => {
    e?.preventDefault();
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;
    setLoading(true);
    setYesNoQ(null);
    // Optimistically add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");

    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Failed to get response");
      }

      const reply: string = data?.text || "I'm here to help with health questions.";
      const fups: string[] = Array.isArray(data?.followUps) ? data.followUps : [];
      const yesNo: string | null = data?.yesNo?.question || null;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setFollowUps(fups.slice(0, 3));
      setYesNoQ(yesNo);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I am having trouble connecting to the health service. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="homepage-hero-heading"
      className="!w-full !h-full"





      style={style}>

      {/* Decorative subtle gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-chart-2/30 blur-3xl" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 !w-full !h-full">
        {/* Textual lead + CTAs */}
        <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 ring-1 ring-border !w-[194px] !h-5">
            <span className="inline-block h-2 w-2 rounded-full bg-chart-1 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-accent-foreground">
              Free, safe, and easy to use
            </span>
          </div>

          <div className="min-w-0">
            <h1
              id="homepage-hero-heading"
              className="text-2xl font-bold leading-snug tracking-[-0.02em] sm:text-3xl md:text-4xl lg:text-5xl">

              {headline}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-4">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              aria-label="Start your health journey"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring sm:!w-56 !h-full"
              onClick={onStart}>

              Start Your Health Journey
            </Button>
            <Button
              aria-label="Open chat now"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={onChat}
              asChild>

              <a href="#chat">
                <MessageCircleQuestionMark className="mr-2 h-5 w-5" aria-hidden="true" />
                Chat Now
              </a>
            </Button>
          </div>

          {/* Value propositions */}
          <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 !w-[573px] !h-[155px]" aria-label="Key benefits">
            {values.slice(0, 6).map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={`${item.title}-${idx}`}
                  className="group flex items-start gap-3 rounded-lg bg-card p-3 ring-1 ring-border transition-shadow hover:shadow-sm focus-within:shadow-sm !w-[278px] !h-[73px]">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground ring-1 ring-border">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium leading-tight">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.description}
                    </p>
                  </div>
                </li>);

            })}
          </ul>
        </div>

        {/* In-page Chat Widget (replaces device mockups) */}
        <div className="relative min-w-0" id="chat">
          <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-b px-4 py-3 bg-muted/40">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground ring-1 ring-border">
                    <MessageCircleQuestionMark className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">Vitual AI</p>
                    <p className="text-[11px] text-muted-foreground truncate">Public health assistant</p>
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground !whitespace-pre-line"></span>
              </div>

              <div className="overflow-y-auto bg-muted/30 px-3 py-3 space-y-2 !w-[99.6%] !h-[421px]">
                {messages.map((m, i) =>
                <div
                  key={i}
                  className={clsx(
                    "max-w-[85%] rounded-lg p-2 text-sm",
                    m.role === "assistant" ?
                    "bg-card ring-1 ring-border shadow-sm" :
                    "ml-auto bg-chart-2/30"
                  )}>

                    {m.content}
                  </div>
                )}
                {loading &&
                <div className="max-w-[85%] rounded-lg p-2 text-sm bg-card ring-1 ring-border shadow-sm">
                    Thinking...
                  </div>
                }
              </div>

              {(yesNoQ || followUps && followUps.length > 0) &&
              <div className="border-t bg-muted/20 px-3 py-2 space-y-2">
                  {yesNoQ &&
                <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-muted-foreground">{yesNoQ}</span>
                      <Button size="sm" variant="secondary" onClick={(e) => handleSend(e, "Yes")}>
                        Yes
                      </Button>
                      <Button size="sm" variant="secondary" onClick={(e) => handleSend(e, "No")}>
                        No
                      </Button>
                    </div>
                }
                  {followUps && followUps.length > 0 &&
                <div className="flex flex-wrap gap-2">
                      {followUps.map((q, idx) =>
                  <Button key={idx} size="sm" variant="outline" onClick={(e) => handleSend(e, q)}>
                          {q}
                        </Button>
                  )}
                    </div>
                }
                </div>
              }

              <form onSubmit={handleSend} className="flex items-center gap-2 border-t bg-muted/40 px-3 py-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Type your message"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Type a message..." />

                <Button type="submit" size="sm" className="gap-1" disabled={loading}>
                  <MessageCircleQuestionMark className="h-4 w-4" aria-hidden="true" />
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

}