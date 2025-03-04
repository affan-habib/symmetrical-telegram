'use client'

import { useDispatch, useSelector } from 'react-redux'
import { selectSidebarState, selectExpandedItems, selectMenuItems, toggleSidebar, toggleMenuItem } from '@/store/features/sidebarSlice'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, LayoutDashboard, ShoppingBag, ShoppingCart, Users, Settings } from 'lucide-react'
import { Button } from './ui/button'

interface MenuItemProps {
  item: {
    id: string
    title: string
    icon?: string
    path?: string
    children?: Array<{
      id: string
      title: string
      path?: string
    }>
  }
  level?: number
  isCollapsed?: boolean
}

const MenuItem = ({ item, level = 0, isCollapsed = false }: MenuItemProps) => {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const expandedItems = useSelector(selectExpandedItems)
  const isExpanded = expandedItems.includes(item.id)
  const isActive = item.path === pathname
  const hasChildren = item.children && item.children.length > 0

  const handleClick = () => {
    if (hasChildren) {
      dispatch(toggleMenuItem(item.id))
    }
  }

  return (
    <div className={cn('flex flex-col', level > 0 && 'ml-4')}>
      {item.path && !hasChildren ? (
        <Link
          href={item.path}
          className={cn(
            'group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:scale-105',
            isActive && 'bg-accent',
            isCollapsed && 'justify-center px-2'
          )}
        >
          {item.icon && (
            <span className={cn('text-lg', !isCollapsed && 'mr-2')}>
              {item.icon === 'layout-dashboard' && <LayoutDashboard className="h-5 w-5" />}
              {item.icon === 'shopping-bag' && <ShoppingBag className="h-5 w-5" />}
              {item.icon === 'shopping-cart' && <ShoppingCart className="h-5 w-5" />}
              {item.icon === 'users' && <Users className="h-5 w-5" />}
              {item.icon === 'settings' && <Settings className="h-5 w-5" />}
            </span>
          )}
          {!isCollapsed && item.title}
          {isCollapsed && (
            <div className="absolute left-full ml-2 hidden rounded-md bg-popover px-2 py-1 text-sm group-hover:block">
              {item.title}
            </div>
          )}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={cn(
            'group relative flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:scale-105',
            isActive && 'bg-accent',
            isCollapsed && 'justify-center px-2'
          )}
        >
          <span className="flex items-center gap-2">
            {item.icon && (
              <span className={cn('text-lg', !isCollapsed && 'mr-2')}>
                {item.icon === 'layout-dashboard' && <LayoutDashboard className="h-5 w-5" />}
                {item.icon === 'shopping-bag' && <ShoppingBag className="h-5 w-5" />}
                {item.icon === 'shopping-cart' && <ShoppingCart className="h-5 w-5" />}
                {item.icon === 'users' && <Users className="h-5 w-5" />}
                {item.icon === 'settings' && <Settings className="h-5 w-5" />}
              </span>
            )}
            {!isCollapsed && item.title}
          </span>
          {hasChildren && !isCollapsed && (
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform',
                isExpanded && 'rotate-180'
              )}
            />
          )}
          {isCollapsed && (
            <div className="absolute left-full ml-2 hidden rounded-md bg-popover px-2 py-1 text-sm group-hover:block">
              {item.title}
            </div>
          )}
        </button>
      )}
      {hasChildren && isExpanded && !isCollapsed && (
        <div className="mt-1">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} level={level + 1} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  )
}

export const Sidebar = () => {
  const dispatch = useDispatch()
  const menuItems = useSelector(selectMenuItems)
  const isCollapsed = useSelector(selectSidebarState)

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r bg-background shadow-lg transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} isCollapsed={isCollapsed} />
        ))}
      </nav>
    </div>
  )
}