export interface Feature {
  title: string
  description: string
  icon: string
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  image: string
}

export const heroData = {
  title: "Create Professional Ebooks with Ease",
  subtitle: "Transform your content into beautifully formatted ebooks in minutes. No design skills required.",
  primaryCTA: "Get Started Free",
  secondaryCTA: "Watch Demo"
}

export const featuresData: Feature[] = [
  {
    title: "Intuitive Editor",
    description: "Drag-and-drop interface makes it easy to create professional-looking ebooks without any technical knowledge.",
    icon: "edit"
  },
  {
    title: "Multiple Formats",
    description: "Export your ebooks in popular formats including EPUB, PDF, and MOBI for maximum compatibility.",
    icon: "file"
  },
  {
    title: "Custom Branding",
    description: "Add your logo, choose your colors, and customize every aspect of your ebook's appearance.",
    icon: "palette"
  },
  {
    title: "Collaboration Tools",
    description: "Work together with your team in real-time with built-in commenting and version control.",
    icon: "users"
  }
]

export const pricingData: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out YouRepub",
    features: [
      "1 ebook per month",
      "Basic templates",
      "Export to PDF",
      "Email support"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professional authors",
    features: [
      "Unlimited ebooks",
      "Premium templates",
      "All export formats",
      "Priority support",
      "Custom branding",
      "Team collaboration"
    ],
    buttonText: "Start Trial",
    popular: true
  },
  {
    name: "Team",
    price: "$99",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Advanced analytics",
      "API access",
      "24/7 phone support",
      "Custom onboarding"
    ],
    buttonText: "Contact Sales"
  }
]

export const testimonialsData: Testimonial[] = [
  {
    content: "YouRepub has transformed how we create training materials. The interface is intuitive and the output is professional.",
    author: "Sarah Johnson",
    role: "Training Manager",
    company: "TechCorp Inc.",
    image: "/testimonials/sarah.jpg"
  },
  {
    content: "As an author, I love how easy it is to create beautiful ebooks. The export options are fantastic!",
    author: "Michael Chen",
    role: "Independent Author",
    company: "Self-Published",
    image: "/testimonials/michael.jpg"
  },
  {
    content: "The collaboration features have made our documentation process so much more efficient.",
    author: "Emily Rodriguez",
    role: "Documentation Lead",
    company: "CloudSoft Solutions",
    image: "/testimonials/emily.jpg"
  }
]