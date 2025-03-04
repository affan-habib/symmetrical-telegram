'use client'

import { Sidebar } from "@/components/Sidebar";
import { useSelector } from 'react-redux';
import { selectSidebarState } from '@/store/features/sidebarSlice';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCollapsed = useSelector(selectSidebarState);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main
        className={cn(
          "flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 transition-all duration-300",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        {children}
      </main>
    </div>
  );
}