"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Hospital, MessageCircleQuestionMark } from "lucide-react";

type HeaderProps = {
  className?: string;
  showBlog?: boolean;
  onChatClick?: () => void;
};

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Header({
  className,
  showBlog = true,
  onChatClick,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const items = NAV_ITEMS;

  return (
    <header
      className={cn(
        "w-full bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b",
        className
      )}
      role="banner"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Vital AI - Home"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary ring-1 ring-border">
                <Hospital aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="font-heading text-base sm:text-lg font-semibold text-foreground truncate">
                  Vital AI
                </span>
                <span className="text-[11px] sm:text-xs text-muted-foreground truncate">
                  Trusted public health support
                </span>
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav
            className="hidden md:flex items-center justify-center gap-1"
            aria-label="Main navigation"
          >
            {items.map((item) => {
              const active = item.href === "/"
                ? pathname === "/"
                : false; // anchors don't get pathname active
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "text-primary bg-accent"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + Mobile Menu */}
          <div className="flex items-center gap-2">
            <CTAButton onChatClick={onChatClick} />

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden shrink-0 bg-card"
                  aria-label="Open menu"
                  aria-haspopup="dialog"
                  aria-expanded={open}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[360px] bg-card p-0"
              >
                <SheetHeader className="px-4 pt-4 pb-2 border-b bg-card">
                  <SheetTitle className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary ring-1 ring-border">
                      <Hospital aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="font-heading text-lg">
                      Vital AI
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="px-2 py-2">
                  <nav
                    className="flex flex-col"
                    aria-label="Mobile navigation"
                  >
                    {items.map((item) => {
                      const active = item.href === "/" ? pathname === "/" : false;
                      return (
                        <SheetClose asChild key={item.name}>
                          <Link
                            href={item.href}
                            className={cn(
                              "w-full text-left px-3 py-3 rounded-md text-base",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              active
                                ? "text-primary bg-accent"
                                : "text-foreground/90 hover:text-foreground hover:bg-muted"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      );
                    })}

                    <div className="px-2 pt-2">
                      <CTAButton onChatClick={onChatClick} fullWidth />
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function CTAButton({
  onChatClick,
  fullWidth,
}: {
  onChatClick?: () => void;
  fullWidth?: boolean;
}) {
  const content = (
    <>
      <MessageCircleQuestionMark
        className="h-4 w-4 sm:h-5 sm:w-5"
        aria-hidden="true"
      />
      <span className="text-sm sm:text-base">Chat Now</span>
    </>
  );

  if (onChatClick) {
    return (
      <Button
        onClick={onChatClick}
        className={cn(
          "gap-2 bg-primary text-primary-foreground hover:bg-primary/90",
          fullWidth ? "w-full" : "w-auto"
        )}
        aria-label="Start chat now"
      >
        {content}
      </Button>
    );
  }

  // Default: link to in-page chat widget
  return (
    <Link href="#chat" className={fullWidth ? "w-full" : "w-auto"}>
      <Button
        type="button"
        className={cn(
          "gap-2 bg-primary text-primary-foreground hover:bg-primary/90 w-full",
          fullWidth ? "w-full" : "w-auto"
        )}
        aria-label="Start chat now"
      >
        {content}
      </Button>
    </Link>
  );
}