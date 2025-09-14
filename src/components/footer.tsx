"use client";

import * as React from "react";
import Link from "next/link";
import { Linkedin, PhoneCall, QrCode, Nfc, Share, Hospital, FileHeart, Heart, Contact } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

const linkBase =
  "text-sm text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm";

const pillBase =
  "inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground ring-1 ring-border";

export default function Footer({ className = "", style }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer
      className={`w-full bg-secondary text-foreground/90 border-t border-border ${className}`}
      style={style}
      aria-labelledby="site-footer-heading"
    >
      <div className="container w-full max-w-full py-10 sm:py-12">
        <h2 id="site-footer-heading" className="sr-only">
          Site footer
        </h2>

        {/* Trust and badges */}
        <div className="w-full max-w-full">
          <div className="flex flex-col gap-6 rounded-xl bg-card p-4 sm:p-6 ring-1 ring-border">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground/90">Trusted public health assistant</p>
                <p className="text-sm text-muted-foreground">
                  Built with safety and privacy-first practices to support communities and health workers.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={pillBase} aria-label="Health information verified">
                  <FileHeart className="h-4 w-4" aria-hidden="true" />
                  Verified health info
                </span>
                <span className={pillBase} aria-label="Privacy by design">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  Privacy by design
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 ring-1 ring-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <QrCode className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground/90">Scan to chat</p>
                  <p className="text-xs text-muted-foreground">QR posters for clinics and community centers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 ring-1 ring-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Nfc className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground/90">NFC tap support</p>
                  <p className="text-xs text-muted-foreground">Enable easy access via NFC tags</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 ring-1 ring-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Share className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground/90">Share with communities</p>
                  <p className="text-xs text-muted-foreground">Works well on low-bandwidth devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Navigation columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <nav aria-label="Primary">
            <p className="text-sm font-semibold text-foreground">Navigate</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className={linkBase}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkBase}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className={linkBase}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkBase}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <p className="text-sm font-semibold text-foreground">Resources</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className={linkBase}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkBase}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={linkBase}>
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/"
                  className={linkBase}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC resources
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Community">
            <p className="text-sm font-semibold text-foreground">Community</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Contact className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Field workers program</span>
              </li>
            </ul>
          </nav>

          <div aria-label="Languages and accessibility" className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Languages</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={pillBase} aria-label="English available">English</span>
              <span className={pillBase} aria-label="Hindi available">हिन्दी</span>
              <span className={pillBase} aria-label="Spanish available">Español</span>
              <span className={pillBase} aria-label="French available">Français</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground break-words">
              Language availability depends on your region. We’re working with public health partners to expand local
              languages for rural and semi-urban communities.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} Public Health Chatbot. All rights reserved.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <a
                href="/privacy"
                className="text-xs text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Privacy
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/terms"
                className="text-xs text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Terms
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/accessibility"
                className="text-xs text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Accessibility
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground ring-1 ring-border transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                aria-label="Visit us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}