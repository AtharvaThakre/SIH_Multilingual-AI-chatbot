"use client"

import React, { useMemo, useState } from "react"
import { Mail, Phone, QrCode, Languages, MessageCircle, CircleQuestionMark, Mailbox, PhoneCall } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type ContactSupportProps = {
  className?: string
  supportPhone?: string
  whatsappNumber?: string
  supportEmail?: string
  addressLines?: string[]
  supportHours?: string
  emergencyPhone?: string
  responseTime?: string
  languages?: string[]
}

export default function ContactSupport({
  className,
  supportPhone = "+1 800 555 0199",
  whatsappNumber = "+1 800 555 0199",
  supportEmail = "support@healthchat.example.org",
  addressLines = ["Community Health Center", "123 Care Road", "District 4, Hope County"],
  supportHours = "Mon–Sat: 8:00–18:00 (local time); Sun: 9:00–13:00",
  emergencyPhone = "112",
  responseTime = "We aim to respond within 24 hours on weekdays.",
  languages = ["English", "Spanish", "Hausa", "Hindi", "Bengali", "Swahili"]
}: ContactSupportProps) {
  const [submitting, setSubmitting] = useState(false)
  const [prefChannel, setPrefChannel] = useState<"phone" | "whatsapp" | "sms" | "email">("whatsapp")
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  const waLink = useMemo(() => {
    const digits = whatsappNumber.replace(/[^\d+]/g, "")
    const cleaned = digits.startsWith("+") ? digits.slice(1) : digits
    return `https://wa.me/${cleaned}`
  }, [whatsappNumber])

  const smsLink = useMemo(() => {
    const digits = supportPhone.replace(/[^\d+]/g, "")
    return `sms:${digits}`
  }, [supportPhone])

  const telLink = useMemo(() => {
    const digits = supportPhone.replace(/[^\d+]/g, "")
    return `tel:${digits}`
  }, [supportPhone])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") || "").trim()
    const contact = String(formData.get("contact") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !contact || !message) {
      toast.error("Please complete all required fields.")
      return
    }

    try {
      setSubmitting(true)
      // Simulate async API call
      await new Promise((r) => setTimeout(r, 900))
      toast.success("Your message has been sent. We'll get back to you soon.")
      e.currentTarget.reset()
    } catch {
      toast.error("Unable to send message right now. Please try again later.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      className={cn(
        "w-full max-w-full",
        highContrast ? "contrast-125" : "",
        largeText ? "text-[17px] sm:text-[18px]" : "text-base",
        className
      )}
      aria-label="Contact and Support"
    >
      <div className="grid gap-6">
        <header className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact & Support</h2>
          <p className="text-muted-foreground max-w-prose">
            We’re here to help. Choose a method that works best for you. For limited internet, phone and WhatsApp are available.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 min-w-0">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                Send us a message
              </CardTitle>
              <CardDescription>Fill in the form and our team will reply by your preferred method.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid gap-3">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Your name" required aria-required="true" className="bg-card" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="contact">Phone or email</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="e.g., +1 555 000 1234 or you@example.org"
                    inputMode="email"
                    className="bg-card"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="grid gap-3">
                  <Label>Preferred reply</Label>
                  <RadioGroup
                    className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
                    value={prefChannel}
                    onValueChange={(v: "phone" | "whatsapp" | "sms" | "email") => setPrefChannel(v)}
                    aria-label="Preferred reply method"
                  >
                    <div className="flex items-center gap-2 rounded-md border bg-secondary/50 px-3 py-2">
                      <RadioGroupItem id="pref-whatsapp" value="whatsapp" />
                      <Label htmlFor="pref-whatsapp" className="flex items-center gap-1 cursor-pointer">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        WhatsApp
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border bg-secondary/50 px-3 py-2">
                      <RadioGroupItem id="pref-sms" value="sms" />
                      <Label htmlFor="pref-sms" className="cursor-pointer">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border bg-secondary/50 px-3 py-2">
                      <RadioGroupItem id="pref-phone" value="phone" />
                      <Label htmlFor="pref-phone" className="flex items-center gap-1 cursor-pointer">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border bg-secondary/50 px-3 py-2">
                      <RadioGroupItem id="pref-email" value="email" />
                      <Label htmlFor="pref-email" className="flex items-center gap-1 cursor-pointer">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Email
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your question or describe the issue"
                    className="bg-card"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <p className="text-sm text-muted-foreground">{responseTime}</p>
                  <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground">
                    {submitting ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-primary" aria-hidden="true" />
                Quick contacts
              </CardTitle>
              <CardDescription>Reach us directly via WhatsApp, SMS, phone, or email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <a
                  href={waLink}
                  className="flex items-center justify-between rounded-md border bg-secondary px-4 py-3 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Open WhatsApp chat at ${whatsappNumber}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <MessageCircle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="font-medium truncate">WhatsApp</div>
                      <div className="text-sm text-muted-foreground truncate break-words">{whatsappNumber}</div>
                    </div>
                  </div>
                  <QrCode className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </a>

                <a
                  href={smsLink}
                  className="flex items-center justify-between rounded-md border bg-secondary px-4 py-3 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Send SMS to ${supportPhone}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Phone className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="font-medium truncate">SMS</div>
                      <div className="text-sm text-muted-foreground truncate break-words">{supportPhone}</div>
                    </div>
                  </div>
                </a>

                <a
                  href={telLink}
                  className="flex items-center justify-between rounded-md border bg-secondary px-4 py-3 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Call ${supportPhone}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <PhoneCall className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="font-medium truncate">Call</div>
                      <div className="text-sm text-muted-foreground truncate break-words">{supportPhone}</div>
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${supportEmail}`}
                  className="flex items-center justify-between rounded-md border bg-secondary px-4 py-3 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Email ${supportEmail}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="font-medium truncate">Email</div>
                      <div className="text-sm text-muted-foreground truncate break-words">{supportEmail}</div>
                    </div>
                  </div>
                </a>
              </div>

              <Separator />

              <div className="grid gap-2">
                <div className="text-sm font-medium">Support hours</div>
                <div className="text-sm text-muted-foreground">{supportHours}</div>
              </div>

              <div className="rounded-md border bg-muted/40 p-3">
                <div className="flex items-start gap-2">
                  <CircleQuestionMark className="h-5 w-5 text-destructive mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium">Emergency</div>
                    <p className="text-sm text-muted-foreground">
                      For urgent medical emergencies, call your local emergency number immediately.
                    </p>
                    <a
                      href={`tel:${emergencyPhone}`}
                      className="mt-1 inline-flex items-center gap-2 rounded-md bg-destructive px-3 py-1.5 text-sm text-destructive-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`Call emergency ${emergencyPhone}`}
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mailbox className="h-5 w-5 text-primary" aria-hidden="true" />
              Address & access
            </CardTitle>
            <CardDescription>Visit us or try alternative access methods if connectivity is limited.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="text-sm font-medium">Physical address</div>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                {addressLines.map((line, i) => (
                  <div key={i} className="break-words">{line}</div>
                ))}
              </address>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Alternative access</div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="break-words">
                  • Save our WhatsApp number and send "Hello" to start: {whatsappNumber}
                </li>
                <li className="break-words">
                  • SMS keyword "HELP" to {supportPhone} for basic tips without internet.
                </li>
                <li className="break-words">
                  • Ask a local health worker to scan this QR in their app to connect:
                  <span className="inline-flex items-center gap-1 rounded-md border bg-secondary px-2 py-1 ml-2">
                    <QrCode className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" aria-hidden="true" />
              Language & accessibility
            </CardTitle>
            <CardDescription>Use the options below to improve readability and communication.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="text-sm font-medium">Available languages</div>
              <p className="text-sm text-muted-foreground break-words">
                {languages.join(", ")}
              </p>
              <p className="text-sm text-muted-foreground">
                If your language is not listed, contact us and we’ll try to assist.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium">Accessibility options</div>
              <div className="flex items-center justify-between rounded-md border bg-secondary px-3 py-2">
                <div className="min-w-0">
                  <div className="font-medium text-sm">Larger text</div>
                  <p className="text-xs text-muted-foreground">Increase text size for easier reading</p>
                </div>
                <button
                  type="button"
                  onClick={() => setLargeText((v) => !v)}
                  aria-pressed={largeText}
                  className={cn(
                    "inline-flex h-8 items-center rounded-full px-2 transition-colors",
                    largeText ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  )}
                >
                  <span className={cn("px-2 py-1 rounded-full text-xs", largeText ? "bg-primary-foreground text-primary" : "bg-card")}>
                    {largeText ? "On" : "Off"}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between rounded-md border bg-secondary px-3 py-2">
                <div className="min-w-0">
                  <div className="font-medium text-sm">High contrast</div>
                  <p className="text-xs text-muted-foreground">Boost contrast for better visibility</p>
                </div>
                <button
                  type="button"
                  onClick={() => setHighContrast((v) => !v)}
                  aria-pressed={highContrast}
                  className={cn(
                    "inline-flex h-8 items-center rounded-full px-2 transition-colors",
                    highContrast ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  )}
                >
                  <span className={cn("px-2 py-1 rounded-full text-xs", highContrast ? "bg-primary-foreground text-primary" : "bg-card")}>
                    {highContrast ? "On" : "Off"}
                  </span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircleQuestionMark className="h-5 w-5 text-primary" aria-hidden="true" />
              Help center
            </CardTitle>
            <CardDescription>Find quick answers, troubleshooting steps, and guides.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="faq">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="troubleshoot">Troubleshoot</TabsTrigger>
                <TabsTrigger value="access">Access methods</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="mt-4">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left">Is the chatbot a replacement for a doctor?</AccordionTrigger>
                    <AccordionContent>
                      No. The chatbot provides general health information and guidance. For diagnosis or emergencies, contact a licensed health professional.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left">Does it work without internet?</AccordionTrigger>
                    <AccordionContent>
                      You can use SMS for basic tips and WhatsApp for low-bandwidth messaging. Full features may require internet.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left">How is my data protected?</AccordionTrigger>
                    <AccordionContent>
                      We follow strict privacy practices and never share personal details without consent. For sensitive matters, prefer phone contact.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left">What languages are supported?</AccordionTrigger>
                    <AccordionContent>
                      Supported languages include: {languages.join(", ")}. Reach out if you need another language.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="troubleshoot" className="mt-4">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="t-1">
                    <AccordionTrigger className="text-left">I’m not receiving WhatsApp replies</AccordionTrigger>
                    <AccordionContent>
                      - Check you have saved our number correctly and sent a greeting like "Hello".{" "}
                      - Ensure your data connection is on.{" "}
                      - If still stuck, send SMS "HELP" to {supportPhone}.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="t-2">
                    <AccordionTrigger className="text-left">Messages fail due to poor signal</AccordionTrigger>
                    <AccordionContent>
                      Try moving to higher ground or near a window. Use SMS as a backup. If possible, call us directly at {supportPhone}.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="t-3">
                    <AccordionTrigger className="text-left">I forgot a previous instruction</AccordionTrigger>
                    <AccordionContent>
                      Send "MENU" on WhatsApp to receive quick options. For printed guides, visit the health center front desk.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="t-4">
                    <AccordionTrigger className="text-left">The site text is too small</AccordionTrigger>
                    <AccordionContent>
                      Use the Larger text option above, or zoom in using your device settings. You can also contact us for phone guidance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="access" className="mt-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="break-words">
                    • WhatsApp: Open {waLink} and send "Hello" to start. Save {whatsappNumber} for future use.
                  </p>
                  <p className="break-words">• SMS: Text "HELP" to {supportPhone} for quick tips.</p>
                  <p className="break-words">• Phone: Call us at {supportPhone} for live assistance during support hours.</p>
                  <p>• Email: Send details to {supportEmail}. Attach photos if helpful.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}