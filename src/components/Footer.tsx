// Footer Component
// Generated: 2025-08-25T12:53:24.817Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Heart,
  Home,
  Award,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Luxury Home Sales", href: "#services" },
        { name: "Property Buying", href: "#services" },
        { name: "Investment Properties", href: "#services" },
        { name: "Market Analysis", href: "#services" },
        { name: "Property Evaluation", href: "#contact" },
        { name: "Relocation Services", href: "#services" }
      ]
    },
    {
      title: "Areas",
      links: [
        { name: "Beverly Hills", href: "#about" },
        { name: "Bel Air", href: "#about" },
        { name: "Malibu", href: "#about" },
        { name: "Hollywood Hills", href: "#about" },
        { name: "Manhattan Beach", href: "#about" },
        { name: "Palos Verdes", href: "#about" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Market Reports", href: "#about" },
        { name: "Buying Guide", href: "#services" },
        { name: "Selling Guide", href: "#services" },
        { name: "Investment Tips", href: "#services" },
        { name: "Client Testimonials", href: "#about" },
        { name: "Recent Sales", href: "#about" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Amanda", href: "#about" },
        { name: "Credentials", href: "#about" },
        { name: "Awards", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/amandafosterhomes" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/amandafosterluxuryhomes" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/amandafoster" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/amandafosterhomes" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/amandafosterre" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AF</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-foreground">Amanda Foster</span>
                  <span className="text-sm text-muted-foreground font-medium">Luxury Homes</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Beverly Hills' premier luxury real estate specialist with over 15 years of experience. 
                Dedicated to providing exceptional service for discerning clients seeking the finest properties.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">amanda@fosterluxuryhomes.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(310) 555-LUXURY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">9200 Sunset Blvd, Beverly Hills, CA 90210</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Home className="size-4 text-primary" />
                Luxury Market Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-4 bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive market insights and new luxury listings. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Amanda Foster Luxury Homes. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Award className="size-3 text-primary" />
                Licensed Real Estate Professional
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-9 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Calendar className="size-3" />
              Schedule Consultation
            </Link>
            <Link href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Users className="size-3" />
              Client Reviews
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href="/equal-housing" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Equal Housing Opportunity
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}