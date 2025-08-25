// Abouthomepage Component
// Generated: 2025-08-25T12:53:24.817Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Home
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "Every transaction receives meticulous attention to detail, ensuring seamless closings and exceptional outcomes for discerning clients."
    },
    {
      icon: Home,
      title: "Luxury Market Mastery",
      description: "Deep expertise in Beverly Hills' most exclusive neighborhoods, from Trousdale Estates to the Beverly Hills Flats."
    },
    {
      icon: Heart,
      title: "Client-First Philosophy",
      description: "Your dreams and goals drive every decision. We provide personalized service that goes beyond traditional real estate."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive connections with international buyers, luxury developers, and exclusive off-market opportunities."
    }
  ]

  const stats = [
    { value: "2008", label: "Established", icon: Award },
    { value: "$500M+", label: "Luxury Sales", icon: TrendingUp },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "Top 1%", label: "Beverly Hills Agent", icon: Users }
  ]

  const credentials = [
    {
      name: "Amanda Foster",
      role: "Luxury Real Estate Specialist",
      image: "AF",
      bio: "Beverly Hills native with 15+ years specializing in ultra-luxury properties. Certified Luxury Home Marketing Specialist."
    },
    {
      name: "Michael Chen",
      role: "Investment Advisor", 
      image: "MC",
      bio: "Former Goldman Sachs analyst specializing in luxury real estate investments and portfolio optimization."
    },
    {
      name: "Sarah Williams",
      role: "Client Relations Director",
      image: "SW",
      bio: "Hospitality industry veteran ensuring every client receives five-star concierge-level service throughout their journey."
    },
    {
      name: "James Rodriguez",
      role: "Market Research Analyst",
      image: "JR",
      bio: "Data-driven market expert providing comprehensive analysis of Beverly Hills luxury market trends and opportunities."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Amanda Foster
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Beverly Hills Luxury
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Real Estate Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over 15 years, Amanda Foster has been the trusted advisor to Beverly Hills' most discerning buyers and sellers, delivering unparalleled expertise in luxury real estate.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Born and raised in Beverly Hills, Amanda Foster understands the nuances of luxury living like no other. Her journey began in 2008, representing exclusive estates and building lasting relationships with high-net-worth clients.
              </p>
              <p>
                What started as a passion for architectural beauty and prime locations has evolved into Beverly Hills' most trusted luxury real estate practice, with over $500 million in successful transactions.
              </p>
              <p>
                Today, Amanda Foster Luxury Homes represents the pinnacle of personalized service, combining local expertise with global reach to serve the world's most sophisticated buyers and sellers.
              </p>
            </div>
            <Button className="group">
              View Recent Sales
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Luxury isn't just about price—it's about creating extraordinary experiences for extraordinary people."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Amanda Foster</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide our approach to luxury real estate and client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              Luxury real estate professionals dedicated to exceeding your expectations at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {credentials.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View Credentials & Awards
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Amanda's expertise in Beverly Hills luxury real estate is unmatched. She sold our Trousdale estate for $2M over asking and found us the perfect new home off-market. Truly exceptional service."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RH
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Harrison</div>
                  <div className="text-sm text-muted-foreground">Tech Executive, Beverly Hills</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}