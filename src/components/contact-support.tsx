"use client"

import React, { useMemo, useState } from "react"
import { Mail, Phone, QrCode, Languages, MessageCircle, CircleQuestionMark, Mailbox, PhoneCall, MapPin, Clock, Shield, Globe, Star, Send, CheckCircle } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"

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
        "w-full max-w-full relative",
        highContrast ? "contrast-125" : "",
        largeText ? "text-[17px] sm:text-[18px]" : "text-base",
        className
      )}
      aria-label="Contact and Support"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="relative z-10 grid gap-8">
        {/* Enhanced Header */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're here to help you every step of the way. Choose your preferred method to connect with our support team.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-primary">24h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-primary">{languages.length}+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency</div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-2 shadow-lg">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Send us a message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you using your preferred method
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        required 
                        className="h-11 bg-background border-2 focus:border-primary transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-sm font-medium">Contact information *</Label>
                      <Input
                        id="contact"
                        name="contact"
                        placeholder="Phone number or email address"
                        required
                        className="h-11 bg-background border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Preferred contact method</Label>
                    <RadioGroup
                      className="grid grid-cols-2 gap-3"
                      value={prefChannel}
                      onValueChange={(v: "phone" | "whatsapp" | "sms" | "email") => setPrefChannel(v)}
                    >
                      {[
                        { value: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "bg-green-50 border-green-200 text-green-700" },
                        { value: "email", label: "Email", icon: Mail, color: "bg-blue-50 border-blue-200 text-blue-700" },
                        { value: "phone", label: "Phone Call", icon: Phone, color: "bg-purple-50 border-purple-200 text-purple-700" },
                        { value: "sms", label: "SMS", icon: MessageCircle, color: "bg-orange-50 border-orange-200 text-orange-700" }
                      ].map(({ value, label, icon: Icon, color }) => (
                        <div key={value} className={cn(
                          "flex items-center gap-3 rounded-lg border-2 p-3 cursor-pointer transition-all hover:shadow-sm",
                          prefChannel === value ? color : "bg-card border-border hover:border-primary/50"
                        )}>
                          <RadioGroupItem id={`pref-${value}`} value={value} />
                          <Label htmlFor={`pref-${value}`} className="flex items-center gap-2 cursor-pointer flex-1">
                            <Icon className="h-4 w-4" />
                            {label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">How can we help you? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your question or issue in detail..."
                      required
                      className="bg-background border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {responseTime}
                    </div>
                    <Button 
                      type="submit" 
                      disabled={submitting} 
                      className="h-11 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    >
                      {submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Sidebar */}
          <div className="space-y-6">
            {/* Instant Contact */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  Instant Contact
                </CardTitle>
                <CardDescription>Get immediate assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={waLink}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-green-500 text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-green-800">WhatsApp</div>
                    <div className="text-sm text-green-600 truncate">{whatsappNumber}</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Online
                  </Badge>
                </a>

                <a
                  href={telLink}
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-blue-500 text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-blue-800">Call Now</div>
                    <div className="text-sm text-blue-600 truncate">{supportPhone}</div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Live
                  </Badge>
                </a>

                <a
                  href={`mailto:${supportEmail}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-purple-500 text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-purple-800">Email</div>
                    <div className="text-sm text-purple-600 truncate">{supportEmail}</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Location & Access */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location & Access
              </CardTitle>
              <CardDescription>Visit us in person or use alternative access methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Mailbox className="h-4 w-4 text-primary" />
                  Physical Address
                </h4>
                <address className="not-italic text-sm text-muted-foreground leading-relaxed pl-6">
                  {addressLines.map((line, i) => (
                    <div key={i} className="break-words">{line}</div>
                  ))}
                </address>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-primary" />
                  Alternative Access
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <MessageCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">WhatsApp Quick Start</div>
                      <div>Save {whatsappNumber} and send "Hello" to begin</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <Phone className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">SMS Support</div>
                      <div>Text "HELP" to {supportPhone} for basic assistance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <Shield className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Offline Access</div>
                      <div>Ask local health workers to connect via QR code</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language & Accessibility */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Language & Accessibility
              </CardTitle>
              <CardDescription>Customize your experience for better accessibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium">Available Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Don't see your language? Contact us and we'll do our best to assist you.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Accessibility Options</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="space-y-1">
                      <div className="font-medium text-sm">Larger Text</div>
                      <div className="text-xs text-muted-foreground">Increase text size for easier reading</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLargeText((v) => !v)}
                      className={cn(
                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                        largeText ? "bg-primary" : "bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                          largeText ? "translate-x-6" : "translate-x-1"
                        )}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="space-y-1">
                      <div className="font-medium text-sm">High Contrast</div>
                      <div className="text-xs text-muted-foreground">Enhance contrast for better visibility</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setHighContrast((v) => !v)}
                      className={cn(
                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                        highContrast ? "bg-primary" : "bg-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                          highContrast ? "translate-x-6" : "translate-x-1"
                        )}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </section>
  )
}