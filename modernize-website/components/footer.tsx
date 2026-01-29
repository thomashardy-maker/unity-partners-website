import Link from "next/link"
import { Linkedin } from "lucide-react"

const navigation = {
  services: [
    { name: "Candidates", href: "#candidates" },
    { name: "Clients", href: "#clients" },
    { name: "Board Recruitment", href: "#services" },
  ],
  company: [
    { name: "About", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  locations: [
    { name: "Hong Kong", href: "#contact" },
    { name: "Singapore", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <span className="font-serif text-2xl font-semibold tracking-tight text-card">Unity Partners</span>
            <p className="text-sm leading-relaxed text-card/60 max-w-xs">
              Recruitment for financial services in Hong Kong & Singapore. Specializing in COOs, Compliance, IT, and Risk roles.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-card/60 hover:text-card transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-card">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-card/60 hover:text-card transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-card">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-card/60 hover:text-card transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-card">Locations</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.locations.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-card/60 hover:text-card transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-card/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-card/40">
            &copy; {new Date().getFullYear()} Unity Partners. All rights reserved. Licence: 78505
          </p>
        </div>
      </div>
    </footer>
  )
}
