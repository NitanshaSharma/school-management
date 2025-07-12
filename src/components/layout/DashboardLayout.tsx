"use client" 


import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { ReactNode, useState } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
  title: string
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 w-0 md:ml-0 min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(true)} title={title} />
       <main className="flex-1 w-full p-0">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}