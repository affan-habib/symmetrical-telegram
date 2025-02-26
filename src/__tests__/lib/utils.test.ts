import { cn } from '@/lib/utils'

describe('cn (className merge utility)', () => {
  it('merges multiple class names', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active')
    expect(result).toBe('base-class active')
  })

  it('handles falsy values', () => {
    const result = cn('base-class', false && 'hidden', null, undefined)
    expect(result).toBe('base-class')
  })

  it('handles array of classes', () => {
    const classes = ['class1', 'class2']
    const result = cn('base', ...classes)
    expect(result).toBe('base class1 class2')
  })

  it('handles tailwind classes with special characters', () => {
    const result = cn('hover:bg-gray-100', 'md:flex-row', 'dark:text-white')
    expect(result).toBe('hover:bg-gray-100 md:flex-row dark:text-white')
  })
})