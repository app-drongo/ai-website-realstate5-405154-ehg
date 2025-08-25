// Services Component
// Generated: 2025-08-25T12:53:24.817Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  TrendingUp,
  Search,
  Shield,
  Handshake,
  Users,
  BarChart3,
  Key
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "luxury-buying",
      title: "Luxury Home Buying",
      description: "Exclusive access to Beverly Hills' finest properties",
      longDescription: "Our luxury buying service provides access to exclusive listings, off-market opportunities, and private estates. We guide high-net-worth clients through every aspect of acquiring their dream Beverly Hills property.",
      icon: Home,
      benefits: [
        "Exclusive off-market property access",
        "Private estate tours and viewings",
        "Market analysis and pricing guidance",
        "Negotiation and closing coordination"
      ],
      pricing: "Buyer representation at no cost",
      timeline: "30-90 days typical search",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "luxury-selling",
      title: "Luxury Home Selling",
      description: "Maximum value through strategic luxury marketing",
      longDescription: "Our comprehensive selling service combines sophisticated marketing, global reach, and expert negotiation to achieve record-breaking sales for Beverly Hills luxury properties.",
      icon: TrendingUp,
      benefits: [
        "Professional staging and photography",
        "Global marketing and advertising",
        "Qualified buyer network access",
        "Expert pricing and negotiation"
      ],
      pricing: "Competitive commission structure",
      timeline: "60-120 days average sale"
    },
    {
      id: "investment-properties",
      title: "Investment Property Advisory",
      description: "Strategic guidance for luxury real estate investments",
      longDescription: "Specialized advisory services for investors seeking luxury real estate opportunities in Beverly Hills. We provide market analysis, ROI projections, and portfolio optimization strategies.",
      icon: BarChart3,
      benefits: [
        "Investment property identification",
        "ROI analysis and projections",
        "Market trend insights",
        "Portfolio diversification guidance"
      ],
      pricing: "Custom advisory fees",
      timeline: "Ongoing consultation",
      badge: "High ROI"
    },
    {
      id: "concierge-services",
      title: "Concierge Real Estate Services",
      description: "White-glove service for discerning clients",
      longDescription: "Comprehensive concierge services including property management coordination, renovation oversight, and lifestyle integration to ensure a seamless luxury living experience.",
      icon: Shield,
      benefits: [
        "Property management coordination",
        "Renovation and design oversight",
        "Lifestyle service connections",
        "Ongoing client support"
      ],
      pricing: "Service-based pricing",
      timeline: "Ongoing relationship",
      badge: "VIP Service"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Luxury Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Beverly Hills Luxury Real Estate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tailored services designed for high-net-worth individuals seeking exceptional results in Beverly Hills' most exclusive market
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Begin Your Beverly Hills Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether buying, selling, or investing, let's discuss how we can achieve your luxury real estate goals.
          </p>
          <Button size="lg">
            Book Private Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}