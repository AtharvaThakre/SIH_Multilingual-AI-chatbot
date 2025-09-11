"use client"

import React from "react"
import { Hospital, Users, Smartphone, Tablets, LayoutTemplate, GalleryVertical, SquareDivide, Contact } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type Partner = {
  name: string
  tag: string
}

type TeamMember = {
  name: string
  role: string
  credentials: string
  focus: string
  photo: string
}

export interface AboutPageProps {
  className?: string
  style?: React.CSSProperties
  compact?: boolean
}

const partners: Partner[] = [
  { name: "State Health Dept.", tag: "Govt. Partner" },
  { name: "SevaCare Foundation", tag: "NGO" },
  { name: "Rural Health India", tag: "NGO" },
  { name: "Community Clinics Network", tag: "Alliance" },
]

const team: TeamMember[] = [
  {
    name: "Dr. Asha Verma",
    role: "Chief Medical Officer",
    credentials: "MBBS, MD (Community Medicine)",
    focus: "Clinical safety, protocol design",
    photo: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Head of AI",
    credentials: "M.Tech, ML Systems",
    focus: "NLP, model reliability",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Program Lead",
    credentials: "MPH, Health Policy",
    focus: "Field operations, partnerships",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Arun Kumar",
    role: "Lead Engineer",
    credentials: "B.Tech, Mobile Systems",
    focus: "Offline-first, accessibility",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
  },
]

export default function AboutPage({
  className,
  style,
  compact = false,
}: AboutPageProps) {
  return (
    <section
      aria-labelledby="about-title"
      className={`w-full max-w-full ${compact ? "" : ""} ${className ?? ""}`}
      style={style}
    >
      {/* Intro / Mission */}
      <div className="w-full">
        <div className="rounded-xl bg-card shadow-sm ring-1 ring-border">
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Hospital className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h1
                  id="about-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                >
                  Improving rural healthcare access with trusted AI guidance
                </h1>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground break-words">
                  We build an AI-driven public health chatbot that helps people in rural and semi-urban communities
                  get timely, credible health information, triage guidance, and seamless connections to local services.
                </p>

                {/* Trust indicators */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Built with community input
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                    <Hospital className="h-4 w-4" aria-hidden="true" />
                    Govt. & NGO partnerships
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border">
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                    Mobile-first, multilingual
                  </span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Problem / Solution / Impact */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              <Card className="bg-card ring-1 ring-border">
                <CardHeader>
                  <CardTitle className="text-lg">The Problem</CardTitle>
                  <CardDescription className="text-sm">
                    Barriers to care in rural areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  - Long travel distances and clinic shortages
                  <br />
                  - Limited health literacy and misinformation
                  <br />
                  - Irregular connectivity and language diversity
                </CardContent>
              </Card>

              <Card className="bg-card ring-1 ring-border">
                <CardHeader>
                  <CardTitle className="text-lg">Our Solution</CardTitle>
                  <CardDescription className="text-sm">
                    Trusted AI for first-mile guidance
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  - Evidence-based triage and self-care tips
                  <br />
                  - Local referrals to verified public services
                  <br />
                  - Works on low-end phones with offline support
                </CardContent>
              </Card>

              <Card className="bg-card ring-1 ring-border">
                <CardHeader>
                  <CardTitle className="text-lg">Impact Goals</CardTitle>
                  <CardDescription className="text-sm">
                    Measurable community outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  - Reduce avoidable clinic visits and delays
                  <br />
                  - Improve adherence to preventive care
                  <br />
                  - Strengthen trust in public health systems
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Story */}
      <div className="mt-8 sm:mt-10">
        <Card className="bg-card ring-1 ring-border overflow-hidden">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            <div className="md:col-span-3 p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl">Our Origin</CardTitle>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                Our team began by shadowing community health workers across remote blocks. We saw long queues for
                simple queries, mothers traveling hours for basic guidance, and frontline workers stretched thin.
                The pattern was clear: early, reliable information—delivered in local languages on ubiquitous
                devices—could prevent complications and reduce travel burdens.
              </p>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                We partnered with district health officials and NGOs to co-design a chatbot that mirrors
                government protocols, respects cultural contexts, and connects people to the nearest appropriate
                care. Today, we continue to iterate with field feedback and clinical oversight.
              </p>
            </div>
            <div className="md:col-span-2 relative min-h-[200px] md:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Community health workers collaborating in a rural clinic"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Technology Overview */}
      <div className="mt-8 sm:mt-10">
        <Card className="bg-card ring-1 ring-border">
          <CardHeader className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GalleryVertical className="h-6 w-6 text-primary" aria-hidden="true" />
              <div>
                <CardTitle className="text-xl sm:text-2xl">Technology Overview</CardTitle>
                <CardDescription className="text-sm">
                  Designed for reliability, safety, and accessibility
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              <FeatureItem
                icon={<Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Mobile-first, low-bandwidth"
                description="Optimized for 2G/3G, small payloads, graceful offline with local caching."
              />
              <FeatureItem
                icon={<Tablets className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Protocol-aligned triage"
                description="Guidance maps to national clinical protocols with clinician review."
              />
              <FeatureItem
                icon={<LayoutTemplate className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Multilingual UX"
                description="Conversational flows in regional languages with clear, simple phrasing."
              />
              <FeatureItem
                icon={<SquareDivide className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Privacy by design"
                description="Minimal data collection, consent-first, encrypted-in-transit."
              />
              <FeatureItem
                icon={<Users className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Human-in-the-loop"
                description="Escalation to verified providers and helplines when needed."
              />
              <FeatureItem
                icon={<Hospital className="h-5 w-5 text-primary" aria-hidden="true" />}
                title="Local directories"
                description="Up-to-date listings of public facilities, schemes, and programs."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge className="bg-secondary text-secondary-foreground ring-1 ring-border">ISO-aligned security practices</Badge>
              <Badge className="bg-secondary text-secondary-foreground ring-1 ring-border">WCAG AA accessible design</Badge>
              <Badge className="bg-secondary text-secondary-foreground ring-1 ring-border">Clinician-reviewed content</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team & Partners */}
      <div className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          {/* Partners */}
          <Card className="bg-card ring-1 ring-border">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Hospital className="h-6 w-6 text-primary" aria-hidden="true" />
                <div>
                  <CardTitle className="text-xl sm:text-2xl">Partners</CardTitle>
                  <CardDescription className="text-sm">
                    Government bodies and accredited NGOs
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <ul className="space-y-3">
                {partners.map((p) => (
                  <li key={p.name} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground ring-1 ring-border">
                      <span className="text-sm font-semibold" aria-hidden="true">
                        {getInitials(p.name)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.tag}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-md bg-secondary/60 p-3 ring-1 ring-border">
                <p className="text-xs text-muted-foreground">
                  We sign data protection addendums with all partners and follow government clinical protocols.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 transition-colors">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("")
}