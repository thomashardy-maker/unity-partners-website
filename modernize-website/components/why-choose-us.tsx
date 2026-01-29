import { Target, Clock, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Objectivity & Transparency",
    description: "Real-time matching based on objective criteria, ensuring the best fit for both candidates and companies."
  },
  {
    icon: Clock,
    title: "Direct Access",
    description: "Connect with qualified candidates through your dedicated account manager within 48-72 hours."
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    description: "We work closely with companies to assess their recruitment processes and understand their unique needs."
  }
]

export function WhyChooseUs() {
  return (
    <section id="candidates" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Why Choose Unity Partners?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              We&apos;re not a generalist job board. We&apos;re a boutique firm that truly understands the financial services sector and delivers a shortlist of realistic, high-potential candidates.
            </p>
            
            <div className="mt-12 space-y-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background font-serif font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-foreground/5 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 shadow-sm">
                      <p className="font-serif text-4xl font-medium text-foreground">48h</p>
                      <p className="text-sm text-muted-foreground mt-1">Response Time</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-sm">
                      <p className="font-serif text-4xl font-medium text-foreground">2</p>
                      <p className="text-sm text-muted-foreground mt-1">Key Markets</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-sm">
                      <p className="font-serif text-4xl font-medium text-foreground">100%</p>
                      <p className="text-sm text-muted-foreground mt-1">Dedicated Focus</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-sm">
                      <p className="font-serif text-4xl font-medium text-foreground">FI</p>
                      <p className="text-sm text-muted-foreground mt-1">Specialization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
