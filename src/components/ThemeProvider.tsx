'use client'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDarkMode, setTheme } from '@/store/features/themeSlice'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)

  useEffect(() => {
    // Check for system preference on initial load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    dispatch(setTheme(prefersDark))

    // Set up listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches))
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [dispatch])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return <>{children}</>
}