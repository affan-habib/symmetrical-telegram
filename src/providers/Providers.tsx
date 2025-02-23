'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { NextIntlClientProvider } from 'next-intl'
import ThemeProvider from '@/components/ThemeProvider'

interface ProvidersProps {
  children: React.ReactNode
  locale: string
  messages: any
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </Provider>
  )
}