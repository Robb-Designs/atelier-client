
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/images/hero-image.webp"

export function WelcomeHero() {
  return (
    <section className="grid gap-8 overflow-hidden rounded-3xl bg-linen p-8 md:grid-cols-2 md:items-center md:p-10">

      {/* Hero content */}
      <div className="flex flex-col items-start gap-5">
        <span className="text-sm font-medium uppercase tracking-widest text-olive">
          Your creative space
        </span>

        <h1 className="font-heading text-4xl leading-tight text-ink md:text-5xl">
          Make room for your best ideas.
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Bring your projects, inspiration, and creative ideas
          together in one thoughtful workspace.
        </p>

        <Button size="lg">
          New project
          <ArrowUpRight />
        </Button>
      </div>

      {/* image here */}
      <div className="relative flex min-h-64 items-center justify-center">
        <img src={heroImage} alt="Workspace botanical collage" className="h-auto w-full object-contain" />
        {/* image collage? */}
      </div>

    </section>
  )
}
