'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Edit, FileText, Palette, Users, Play, Globe } from 'lucide-react'
import { heroData, featuresData, pricingData, testimonialsData } from '@/data/landing-page'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const iconMap = {
  edit: Edit,
  file: FileText,
  palette: Palette,
  users: Users
}

export default function Home() {
  const t = useTranslations('common')

  return (
    <div className="min-h-screen">
      <div className="flex justify-end gap-4 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/en" locale="en">
              <DropdownMenuItem>
                English
              </DropdownMenuItem>
            </Link>
            <Link href="/es" locale="es">
              <DropdownMenuItem>
                Español
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            {heroData.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {heroData.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">{heroData.primaryCTA}</Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              {heroData.secondaryCTA}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to create professional ebooks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresData.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.map((plan) => (
              <Card key={plan.name} className={plan.popular ? 'border-primary shadow-lg' : ''}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="w-fit mb-2">Most Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">Join thousands of satisfied authors and publishers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.author}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}