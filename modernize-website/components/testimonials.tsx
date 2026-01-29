import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I think relying on expert matching to connect companies with the right talent is a great idea.",
    author: "Client Partner"
  },
  {
    quote: "It's a valuable initiative—hiring often happens within the same circles. This brings fresh perspectives.",
    author: "HR Director"
  },
  {
    quote: "It's a smart approach. Companies need to look beyond their usual network and open up to new profiles.",
    author: "Managing Director"
  },
  {
    quote: "The service ensures we don't miss out on the candidate best positioned to help our business grow.",
    author: "CEO"
  },
  {
    quote: "This agency doesn't feel like a generalist job board—it feels like a boutique firm that really understands our needs.",
    author: "Head of Operations"
  },
  {
    quote: "The value of this recruitment partner lies in its ability to deliver a shortlist of realistic, high-potential candidates—not just names on a list.",
    author: "CFO"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Study realized by private survey over our clients of 2024
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
              <blockquote className="text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
