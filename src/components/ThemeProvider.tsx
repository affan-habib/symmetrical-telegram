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

  // Only run on client-side
  useEffect(() => {
    // Initialize theme from localStorage if available
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      dispatch(setTheme(savedTheme === 'dark'))
    } else {
      // If no theme in localStorage, check system preference and save to localStorage
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      dispatch(setTheme(prefersDark))
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
    }
  }, [dispatch]) // Only run once on mount

  // Handle theme changes
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return <>{children}</>
}