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
                <span className={pillBase} aria-label="Healthcare partner">
                  <Hospital className="h-4 w-4" aria-hidden="true" />
                  Public health partner
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

        {/* Emergency and quick help */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="col-span-1 rounded-xl bg-destructive/10 p-4 ring-1 ring-destructive/20">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-destructive text-destructive-foreground">
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Emergency</p>
                <p className="text-sm text-muted-foreground">
                  If you or someone is in immediate danger, call your local emergency number.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href="tel:112"
                    className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-destructive/10"
                    aria-label="Call emergency number 112"
                  >
                    112
                  </a>
                  <a
                    href="tel:911"
                    className="inline-flex items-center rounded-md bg-card px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-destructive/10"
                    aria-label="Call emergency number 911"
                  >
                    911
                  </a>
                  <a
                    href="tel:988"
                    className="inline-flex items-center rounded-md bg-card px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-destructive/10"
                    aria-label="Call mental health crisis line 988"
                  >
                    988
                  </a>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Numbers vary by region. Use the number listed in your area if different.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 rounded-xl bg-card p-4 ring-1 ring-border">
            <p className="text-sm font-semibold text-foreground">Quick health resources</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.who.int/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  WHO: Health information
                </a>
              </li>
              <li>
                <a
                  href="https://www.unicef.org/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  UNICEF: Community health
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  Find nearby hospitals
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 rounded-xl bg-card p-4 ring-1 ring-border">
            <p className="text-sm font-semibold text-foreground">Contact and support</p>
            <ul className="mt-2 space-y-2">
              <li className="min-w-0">
                <a href="/contact" className={linkBase}>
                  Contact/Support
                </a>
              </li>
              <li className="min-w-0">
                <a href="mailto:support@example.org" className={linkBase} aria-label="Email support at support@example.org">
                  Email: support@example.org
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className={linkBase} aria-label="Call support at +1 800 555 1234">
                  Phone: +1 800 555 1234
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18005551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                  aria-label="Chat on WhatsApp"
                >
                  WhatsApp support
                </a>
              </li>
              <li>
                <a
                  href="sms:+18005551234"
                  className={linkBase}
                  aria-label="Send SMS to support at +1 800 555 1234"
                >
                  SMS: +1 800 555 1234
                </a>
              </li>
            </ul>
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
              <li className="flex items-center gap-2">
                <Hospital className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Clinic partnerships</span>
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

        {/* Partnerships row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground/90">In collaboration with public health initiatives</p>
            <p className="text-xs text-muted-foreground">
              Partnerships with local health departments and community organizations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-md bg-card px-3 py-1.5 ring-1 ring-border">
              <Hospital className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground/90">Govt Health Program</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-card px-3 py-1.5 ring-1 ring-border">
              <FileHeart className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground/90">Community Care Network</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-card px-3 py-1.5 ring-1 ring-border">
              <Heart className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground/90">Health Education Alliance</span>
            </div>
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