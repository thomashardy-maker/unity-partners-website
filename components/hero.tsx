import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Briefcase } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        {/* Financial Services side - Dark */}
        <div className="w-1/2 bg-foreground relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>
        </div>
        {/* Non-Financial Services side - Light with warm accent */}
        <div className="w-1/2 bg-secondary relative">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>
        </div>
      </div>

      {/* Mobile: stacked background */}
      <div className="absolute inset-0 flex flex-col md:hidden">
        <div className="h-1/2 bg-foreground" />
        <div className="h-1/2 bg-secondary" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-accent-foreground animate-pulse" />
            Serving Hong Kong & Singapore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Financial Services */}
          <div className="text-center md:text-left p-8 lg:p-12 rounded-2xl md:rounded-none md:p-0">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-card/10 mb-6">
              <TrendingUp className="h-7 w-7 text-card" />
            </div>
            <h1 className="font-serif text-3xl font-medium tracking-tight text-card sm:text-4xl lg:text-5xl text-balance">
              Financial Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-card/70 max-w-md text-pretty">
              COOs, Compliance, IT, Risk, and executive roles across banking, asset management, and insurance.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-card text-foreground hover:bg-card/90">
                <Link href="#services">
                  Explore FS Roles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Non-Financial Services */}
          <div className="text-center md:text-left p-8 lg:p-12 rounded-2xl md:rounded-none md:p-0">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-foreground/10 mb-6">
              <Briefcase className="h-7 w-7 text-foreground" />
            </div>
            <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Industry & Commerce
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-md text-pretty">
              Technology, operations, and leadership roles across diverse industries including retail, logistics, and professional services.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-foreground text-card hover:bg-foreground/90">
                <Link href="#services">
                  Explore All Roles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            One agency. Two worlds of opportunity.
          </p>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
