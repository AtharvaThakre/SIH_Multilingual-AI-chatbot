"use client"

import * as React from "react"
import {
  Newspaper,
  Twitter,
  ScrollText,
  BellRing,
  CalendarSearch,
  MessageSquareDot,
  MailPlus,
  HeartPulse,
  HeartPlus,
} from "lucide-react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type CategoryKey = "all" | "health-tips" | "updates" | "news"

type Article = {
  id: string
  title: string
  excerpt: string
  date: string // ISO
  category: Exclude<CategoryKey, "all">
  imageUrl: string
}

const CATEGORY_META: Record<
  Exclude<CategoryKey, "all">,
  { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }
> = {
  "health-tips": { label: "Health Tips", Icon: HeartPulse },
  updates: { label: "Chatbot Updates", Icon: MessageSquareDot },
  news: { label: "Public Health News", Icon: ScrollText },
}

const DEFAULT_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Staying Hydrated in Hot Weather: Simple Steps for Rural Communities",
    excerpt:
      "Learn practical ways to prevent dehydration during heat waves, including safe water storage and recognizing early warning signs.",
    date: "2025-07-06",
    category: "health-tips",
    imageUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "New Offline Mode for the Health Chatbot",
    excerpt:
      "Our latest update improves reliability on low connectivity. Get answers and save guidance for later — no constant internet needed.",
    date: "2025-06-25",
    category: "updates",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Seasonal Dengue Alert: What to Watch For",
    excerpt:
      "Local health teams report higher mosquito activity. Know the symptoms, prevention basics, and when to seek care.",
    date: "2025-06-15",
    category: "news",
    imageUrl:
      "https://images.unsplash.com/photo-1523246197593-1142f3be1d25?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Heart Health Basics: Small Habits, Big Impact",
    excerpt:
      "Add movement to your day, eat more fiber, and learn how salt affects blood pressure — simple tips you can start now.",
    date: "2025-05-28",
    category: "health-tips",
    imageUrl:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Community WhatsApp Support Line Launched",
    excerpt:
      "You can now receive verified health tips and chatbot guidance through our new WhatsApp line during local clinic hours.",
    date: "2025-05-12",
    category: "updates",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Vaccination Drive: Dates and Locations",
    excerpt:
      "Mobile clinics will visit villages over the next two weeks. Bring ID if available; services are free for all.",
    date: "2025-04-30",
    category: "news",
    imageUrl:
      "https://images.unsplash.com/photo-1584367369853-8b966cf22367?q=80&w=1200&auto=format&fit=crop",
  },
]

export type BlogSectionProps = {
  className?: string
  style?: React.CSSProperties
  articles?: Article[]
  initialCategory?: CategoryKey
  onSubscribeEmail?: (email: string) => Promise<void> | void
}

function formatDate(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return iso
  }
}

function CategoryBadge({ category }: { category: Article["category"] }) {
  const meta = CATEGORY_META[category]
  const Icon = meta.Icon
  return (
    <Badge
      variant="secondary"
      className="bg-accent text-accent-foreground hover:bg-accent/80"
      aria-label={meta.label}
    >
      <Icon className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
      {meta.label}
    </Badge>
  )
}

function ShareButtons({
  title,
  url,
}: {
  title: string
  url?: string
}) {
  const shareText = encodeURIComponent(title)
  const shareUrl = encodeURIComponent(url ?? "")
  const openWindow = (href: string) => {
    if (typeof window !== "undefined") {
      window.open(href, "_blank", "noopener,noreferrer,width=600,height=540")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-foreground hover:bg-accent"
        aria-label="Share on X (Twitter)"
        onClick={() =>
          openWindow(
            `https://twitter.com/intent/tweet?text=${shareText}${
              shareUrl ? "%20" + shareUrl : ""
            }`
          )
        }
      >
        <Twitter className="h-4.5 w-4.5" aria-hidden="true" />
      </Button>
    </div>
  )
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group relative overflow-hidden bg-card transition-shadow hover:shadow-md focus-within:shadow-md">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <img
          src={article.imageUrl}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <CategoryBadge category={article.category} />
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarSearch className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs">{formatDate(article.date)}</span>
          </div>
        </div>
        <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-lg">
          <span className="line-clamp-2 break-words">{article.title}</span>
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Newspaper className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Content type: </span>
          <span>{CATEGORY_META[article.category].label}</span>
        </div>
        <ShareButtons title={article.title} />
      </CardFooter>
    </Card>
  )
}

export default function BlogSection({
  className,
  style,
  articles = DEFAULT_ARTICLES,
  initialCategory = "all",
  onSubscribeEmail,
}: BlogSectionProps) {
  const [query, setQuery] = React.useState("")
  const [category, setCategory] = React.useState<CategoryKey>(initialCategory)
  const [email, setEmail] = React.useState("")
  const [submitting, setSubmitting] = React.useState(false)

  const categories: { key: CategoryKey; label: string; icon: React.ReactNode }[] =
    [
      { key: "all", label: "All", icon: <Newspaper className="h-4 w-4" /> },
      {
        key: "health-tips",
        label: "Health Tips",
        icon: <HeartPlus className="h-4 w-4" />,
      },
      {
        key: "updates",
        label: "Updates",
        icon: <BellRing className="h-4 w-4" />,
      },
      { key: "news", label: "News", icon: <ScrollText className="h-4 w-4" /> },
    ]

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      const matchesCategory = category === "all" ? true : a.category === category
      const matchesQuery =
        q.length === 0
          ? true
          : a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q)
    })
  }, [articles, query, category])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailTrim = email.trim()
    const valid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim) && emailTrim.length <= 254

    if (!valid) {
      toast.error("Please enter a valid email address.")
      return
    }

    try {
      setSubmitting(true)
      if (onSubscribeEmail) {
        await onSubscribeEmail(emailTrim)
      } else {
        await new Promise((r) => setTimeout(r, 700))
      }
      setEmail("")
      toast.success("Subscribed! You will receive health updates via email.")
    } catch {
      toast.error("Subscription failed. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      aria-labelledby="blog-section-title"
      className={cn(
        "w-full max-w-full rounded-2xl bg-card/80 p-4 sm:p-6 md:p-8 shadow-sm ring-1 ring-border backdrop-blur",
        className
      )}
      style={style}
    >
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2
              id="blog-section-title"
              className="text-xl font-bold tracking-tight sm:text-2xl"
            >
              Health Tips & Updates
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Practical health guidance, chatbot updates, and public health news
            for rural communities.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-auto"
          role="search"
          aria-label="Search articles"
        >
          <div className="relative">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tips, updates, news..."
              className="w-full sm:w-80 bg-card"
              aria-label="Search"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              <CalendarSearch className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </form>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:mb-6">
        <div className="block sm:hidden">
          <Select
            onValueChange={(v: CategoryKey) => setCategory(v)}
            value={category}
          >
            <SelectTrigger className="bg-card" aria-label="Select category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="health-tips">Health Tips</SelectItem>
              <SelectItem value="updates">Updates</SelectItem>
              <SelectItem value="news">News</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs
          value={category}
          onValueChange={(v) => setCategory(v as CategoryKey)}
          className="hidden sm:block"
        >
          <TabsList className="bg-secondary">
            {categories.map((c) => (
              <TabsTrigger
                key={c.key}
                value={c.key}
                className="data-[state=active]:bg-card data-[state=active]:text-foreground"
              >
                <span className="mr-2 inline-flex">{c.icon}</span>
                <span className="hidden sm:inline">{c.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent key={c.key} value={c.key} className="sr-only" />
          ))}
        </Tabs>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-border bg-muted/40 p-6 text-center">
          <p className="font-medium">No articles found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : null}

      <div className="mt-8 sm:mt-10">
        <Card className="bg-secondary">
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <MailPlus className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Get health updates</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <HeartPlus className="h-4 w-4" aria-hidden="true" />
              <span>Trusted, practical, and free</span>
            </div>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full flex-col gap-3 sm:flex-row"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card"
                aria-required="true"
              />
              <Button
                type="submit"
                disabled={submitting}
                className="whitespace-nowrap"
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">
              We respect your privacy. You can unsubscribe anytime.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}