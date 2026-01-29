"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Building } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Are you a company or candidate seeking opportunities? A strategist looking to grow? We&apos;re here to help connect you with the right opportunities.
            </p>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="mt-1 text-muted-foreground">
                    18 Tang Lung Street<br />
                    Causeway Bay<br />
                    Hong Kong
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Licence</h3>
                  <p className="mt-1 text-muted-foreground">78505</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="mt-1 text-muted-foreground">thomas.hardy@unity-partners.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">
              Ready to get started?
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  placeholder="Company name"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
