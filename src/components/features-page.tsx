"use client";

import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent } from
"@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent } from
"@/components/ui/accordion";
import {
  FileHeart,
  SquareDivide,
  TabletSmartphone,
  Clock1,
  Database,
  Grid3x2,
  MessageCircleQuestionMark } from
"lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  benefits: string[];
  examples: string[];
};

export interface FeaturesPageProps {
  className?: string;
  initialTab?: string;
}

const features: Feature[] = [
{
  id: "preventive",
  title: "Healthcare Guidance",
  description:
  "Personalized, easy-to-understand advice that helps individuals and families stay healthy with daily habits, nutrition tips, sanitation practices, and seasonal precautions tailored to local contexts.",
  icon: FileHeart,
  benefits: [
  "Simple, actionable tips designed for all literacy levels",
  "Culturally aware recommendations for rural and semi-urban settings",
  "Promotes healthy habits to reduce clinic visits and costs"],

  examples: [
  "Daily checklist for clean water, handwashing, and safe food storage",
  "Monsoon season guidance to reduce water-borne illness",
  "Maternal and child nutrition reminders aligned with local diets"]

},
{
  id: "symptoms",
  title: "Disease Symptom Identification",
  description:
  "Conversational triage that helps users describe symptoms and understand possible conditions, with clear guidance on when to seek urgent care and what information to share with a clinician.",
  icon: SquareDivide,
  benefits: [
  "Step-by-step symptom questions with plain language",
  "Safety-first alerts for red-flag symptoms",
  "Prepares a concise summary to share with health workers"],

  examples: [
  "Differentiate common cold vs. flu and suggest home care",
  "Identify dehydration signs in children and when to rehydrate or visit a clinic",
  "Flag high fever with severe headache as urgent for medical attention"]

},
{
  id: "vaccination",
  title: "Vaccination & Immunization",
  description:
  "Keeps track of immunization schedules for children, adults, and seniors. Provides reminders, local clinic information, and explanations of each vaccine's benefits.",
  icon: TabletSmartphone,
  benefits: [
  "Timely reminders with clear next steps",
  "Localized details for government-supported immunization programs",
  "Family profiles to manage multiple schedules in one place"],

  examples: [
  "Pediatric vaccination calendar with due dates and catch-up guidance",
  "Pregnancy-related vaccinations and safe timing",
  "Adult booster reminders and outreach campaigns"]

},
{
  id: "alerts",
  title: "Real-time Outbreak Alerts",
  description:
  "Proactive notifications about disease outbreaks and environmental risks in the user's region, with practical instructions to reduce exposure and access support.",
  icon: Clock1,
  benefits: [
  "Timely regional alerts verified from credible sources",
  "Clear prevention steps translated into local context",
  "Reduces misinformation with authoritative updates"],

  examples: [
  "Heatwave guidance for hydration and outdoor work adjustments",
  "Dengue cluster alerts with mosquito bite prevention tips",
  "Air quality warnings with mask and indoor ventilation advice"]

},
{
  id: "integration",
  title: "Database Integration",
  description:
  "Seamless access to public health programs, verified clinics, and official advisories via government data sources for trustworthy, up-to-date information.",
  icon: Database,
  benefits: [
  "Verified clinic lists, hours, and program eligibility",
  "Official advisories and vaccination drives",
  "Supports transparency and trust in public health services"],

  examples: [
  "Locate nearest primary health center and immunization camp",
  "Check subsidy eligibility and required documents",
  "View official advisories in simple language"]

},
{
  id: "multilingual",
  title: "Multilingual Support",
  description:
  "Converses in multiple Indian languages and dialects with clear, simple phrasing—improving accessibility for diverse communities and varying literacy levels.",
  icon: Grid3x2,
  benefits: [
  "Switch language at any time during chat",
  "Respect for local terms and idioms to aid understanding",
  "Text that's readable aloud by basic screen readers"],

  examples: [
  "Change from English to Hindi or Bengali mid-conversation",
  "Use local health terms with clear definitions",
  "Offer short, bullet-style answers for easier reading"]

}];


function SectionHeader() {
  return (
    <header className="w-full max-w-full mb-6 sm:mb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
        <span className="inline-flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MessageCircleQuestionMark className="size-3.5" aria-hidden="true" />
        </span>
        Features & FAQ
      </div>
      <h2 className="mt-3 text-2xl leading-tight font-heading sm:text-3xl md:text-4xl">
        Powerful, accessible health guidance for every community
      </h2>
      <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
        A comprehensive feature set designed to build trust, reduce confusion, and deliver timely health information—on any device, in your language.
      </p>
    </header>);

}

function FeatureCard({ feature }: {feature: Feature;}) {
  const Icon = feature.icon;
  return (
    <article
      className="w-full max-w-full rounded-lg bg-card shadow-sm ring-1 ring-border transition-shadow duration-200 hover:shadow-md focus-within:shadow-md"
      aria-labelledby={`${feature.id}-title`}>

      <div className="p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="shrink-0 rounded-md bg-secondary p-2 text-primary ring-1 ring-border">
            <Icon className="size-5 sm:size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3
              id={`${feature.id}-title`}
              className="text-base sm:text-lg font-semibold leading-snug break-words">

              {feature.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-muted-foreground break-words">
              {feature.description}
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6">
          <section aria-label="Key benefits" className="min-w-0">
            <h4 className="text-sm font-semibold text-foreground">Benefits</h4>
            <ul className="mt-2 space-y-2 text-sm text-foreground">
              {feature.benefits.map((b, idx) =>
              <li
                key={idx}
                className="flex items-start gap-2 min-w-0">

                  <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary" />

                  <span className="min-w-0 break-words">{b}</span>
                </li>
              )}
            </ul>
          </section>

          <section aria-label="Example use cases" className="min-w-0">
            <h4 className="text-sm font-semibold text-foreground">Example use cases</h4>
            <ul className="mt-2 space-y-2 text-sm text-foreground">
              {feature.examples.map((e, idx) =>
              <li
                key={idx}
                className="flex items-start gap-2 min-w-0">

                  <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary/60" />

                  <span className="min-w-0 break-words">{e}</span>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </article>);

}

export default function FeaturesPageSection({
  className,
  initialTab
}: FeaturesPageProps) {
  const defaultTab = features.some((f) => f.id === initialTab) ?
  initialTab :
  features[0]?.id;

  return (
    <section
      className={
      "w-full max-w-full bg-transparent " + (
      className ? className : "")
      }
      aria-label="Chatbot features and frequently asked questions">

      <SectionHeader />

      <div className="w-full max-w-full rounded-lg bg-card ring-1 ring-border">
        <Tabs
          defaultValue={defaultTab}
          className="w-full max-w-full"
          aria-label="Feature categories">

          <div className="border-b border-border/80 px-3 sm:px-4 pt-3 sm:pt-4">
            <TabsList className="justify-start gap-1 overflow-x-auto rounded-md bg-secondary p-1 sm:p-1.5 w-full h-auto max-w-full">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <TabsTrigger
                    key={f.id}
                    value={f.id}
                    className="data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:bg-card/60 text-foreground whitespace-nowrap min-w-0 flex-shrink-0 px-3 py-2 text-xs sm:text-sm"
                    aria-controls={`${f.id}-content`}>
                    <span className="flex items-center gap-2">
                      <Icon className="size-4 shrink-0" aria-hidden="true" />
                      <span className="hidden sm:inline">{f.title}</span>
                      <span className="sm:hidden">{f.title.split(" ")[0]}</span>
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {features.map((f) =>
          <TabsContent
            key={f.id}
            value={f.id}
            id={`${f.id}-content`}
            className="px-3 sm:px-4 py-4 sm:py-6">

              <FeatureCard feature={f} />
            </TabsContent>
          )}
        </Tabs>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <span className="inline-flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircleQuestionMark className="size-3.5" aria-hidden="true" />
            </span>
            Frequently Asked Questions
          </div>
          <h3 className="mt-3 text-xl sm:text-2xl font-heading">
            Get quick answers
          </h3>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-2xl">
            Clear, straightforward information to help you use the chatbot with confidence.
          </p>
        </div>

        <div className="w-full max-w-full rounded-lg bg-card ring-1 ring-border">
          <Accordion type="single" collapsible className="w-full max-w-full divide-y divide-border">
            <AccordionItem value="what-is-it">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left">
                What does the chatbot do?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm text-foreground">
                It provides preventive health tips, helps identify symptoms, tracks vaccination schedules, sends verified outbreak alerts, and connects you with official programs and clinics. It works in multiple languages with clear, simple explanations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-safety">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left">
                Is my information safe?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm text-foreground">
                We follow strict privacy practices and only use information to provide the requested guidance. For official services, we display government-sourced data and clearly indicate when you are viewing external program information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="medical-advice">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left">
                Is this a replacement for a doctor?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm text-foreground">
                No. The chatbot supports education and navigation. For emergencies or severe symptoms, it advises urgent care and helps you communicate key details to a healthcare professional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left">
                Which languages are supported?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm text-foreground">
                The chatbot supports multiple Indian languages and dialects. You can switch language anytime during the conversation. Availability may expand over time based on community needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="connectivity">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left">
                Does it work with limited internet?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm text-foreground">
                The experience is optimized for low-bandwidth and mobile devices. Some features like real-time alerts require connectivity; the chatbot gracefully degrades and provides essential guidance whenever possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>);

}