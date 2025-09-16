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
import { Menu, Hospital } from "lucide-react";

type HeaderProps = {
  className?: string;
  showBlog?: boolean;
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
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const items = NAV_ITEMS;

  // Smooth scroll function for anchor links
  const handleSmoothScroll = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header
      className={cn(
        "mx-4 mt-4 max-w-7xl left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 border border-white/20",
        "shadow-lg shadow-black/5 rounded-2xl floating-header",
        className
      )}
      role="banner"
      style={{ position: 'fixed', zIndex: 60 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 py-2 sm:py-3">
          {/* Left: Brand */}
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Vital AI - Home"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-gray-500 ring-1 ring-white/30">
                <Hospital aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="font-heading text-sm sm:text-base font-semibold text-gray-500 truncate">
                  Vital AI
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 truncate">
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
              
              // Use Link for home page, button for smooth scroll anchors
              if (item.href === "/") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      "active:scale-95 hover:scale-105",
                      active
                        ? "text-gray-500 bg-white/20 backdrop-blur-sm"
                        : "text-gray-500 hover:text-gray-500 hover:bg-white/10"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href)}
                  className={cn(
                    "px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "active:scale-95 hover:scale-105",
                    "text-gray-500 hover:text-gray-500 hover:bg-white/10"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right: Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden shrink-0 bg-white/10 backdrop-blur-sm border-white/20 text-gray-500 hover:text-gray-500 hover:bg-white/20"
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
                      
                      // Use Link for home page, button for smooth scroll anchors
                      if (item.href === "/") {
                        return (
                          <SheetClose asChild key={item.name}>
                            <Link
                              href={item.href}
                              className={cn(
                                "w-full text-left px-3 py-3 rounded-md text-base transition-all duration-200",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                "active:scale-95",
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
                      }

                      return (
                        <SheetClose asChild key={item.name}>
                          <button
                            onClick={() => handleSmoothScroll(item.href)}
                            className={cn(
                              "w-full text-left px-3 py-3 rounded-md text-base transition-all duration-200",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              "active:scale-95",
                              "text-foreground/90 hover:text-foreground hover:bg-muted"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.name}
                          </button>
                        </SheetClose>
                      );
                    })}
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