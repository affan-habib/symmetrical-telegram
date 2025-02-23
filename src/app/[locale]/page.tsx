'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export default function Home() {
  const t = useTranslations('common')

  return (
    <div className="min-h-screen p-24">
      <div className="flex justify-end gap-4 mb-8">
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
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {t('welcome')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['home', 'about', 'contact'].map((key) => (
            <div 
              key={key}
              className="p-6 bg-card rounded-lg shadow-md transition-colors duration-200"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {t(key)}
              </h2>
              <div className="space-y-2">
                <Button className="w-full">
                  {t('learnMore')}
                </Button>
                <Button variant="outline" className="w-full">
                  {t('details')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}