import { Users, Building2, UserCog, TrendingUp, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Candidates",
    description: "Looking for your next opportunity? We connect talented professionals with leading organizations across financial services and beyond in Hong Kong and Singapore.",
    cta: "Find a Job",
    href: "#contact"
  },
  {
    icon: Building2,
    title: "Clients",
    description: "Need to strengthen your team? We provide expert matching to connect you with the right talent within 48-72 hours through your dedicated account manager.",
    cta: "Contact Us",
    href: "#contact"
  },
  {
    icon: UserCog,
    title: "Interim Management",
    description: "Need leadership during a transition? We help find short to medium-term CxOs and senior executives to guide your organization through change, restructuring, or growth phases.",
    cta: "Learn More",
    href: "#contact"
  }
]

const sectors = [
  {
    icon: TrendingUp,
    title: "Financial Services",
    roles: ["COO & Operations", "Compliance & Legal", "IT & Technology", "Risk Management", "Finance & Accounting"],
    theme: "dark"
  },
  {
    icon: Briefcase,
    title: "Industry & Commerce",
    roles: ["Technology & Digital", "Operations Leadership", "Supply Chain & Logistics", "Professional Services", "Retail & Consumer"],
    theme: "light"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            How We Can Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Whether you&apos;re seeking your next career move or building your team, we deliver tailored solutions across all sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="font-serif text-xl font-medium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href={service.href}>{service.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dual Sector Showcase */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl text-balance">
            Our Expertise
          </h3>
          <p className="mt-4 text-muted-foreground text-pretty">
            Spanning two worlds with one commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector) => (
            <div 
              key={sector.title}
              className={`rounded-2xl p-8 lg:p-10 ${
                sector.theme === "dark" 
                  ? "bg-foreground text-card" 
                  : "bg-secondary text-foreground border border-border"
              }`}
            >
              <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${
                sector.theme === "dark" 
                  ? "bg-card/10" 
                  : "bg-foreground/10"
              }`}>
                <sector.icon className={`h-7 w-7 ${
                  sector.theme === "dark" ? "text-card" : "text-foreground"
                }`} />
              </div>
              
              <h4 className="font-serif text-2xl font-medium mb-6">
                {sector.title}
              </h4>
              
              <ul className="space-y-3">
                {sector.roles.map((role) => (
                  <li 
                    key={role} 
                    className={`flex items-center gap-3 ${
                      sector.theme === "dark" ? "text-card/80" : "text-muted-foreground"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      sector.theme === "dark" ? "bg-accent" : "bg-accent"
                    }`} />
                    {role}
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`mt-8 ${
                  sector.theme === "dark" 
                    ? "bg-card text-foreground hover:bg-card/90" 
                    : "bg-foreground text-card hover:bg-foreground/90"
                }`}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
