'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const t = useTranslations('common')

  return (
    <div className="min-h-screen p-24">
      <ThemeToggle />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {t('welcome')}
        </h1>
        
        <nav className="space-x-4 mb-8">
          <Link href="/en" locale="en" className="text-blue-600 hover:underline dark:text-blue-400">
            English
          </Link>
          <Link href="/es" locale="es" className="text-blue-600 hover:underline dark:text-blue-400">
            Español
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['home', 'about', 'contact'].map((key) => (
            <div 
              key={key}
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 transition-colors duration-200"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {t(key)}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}