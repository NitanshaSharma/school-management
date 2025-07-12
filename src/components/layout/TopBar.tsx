"use client"

interface TopBarProps {
  onMenuClick: () => void
  title: string
}

export default function TopBar({ onMenuClick, title }: TopBarProps) {
  return (
    <header className="h-16 w-full flex items-center justify-between px-4 sm:px-8 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden mr-2 p-2 rounded hover:bg-gray-100 focus:outline-none"
        onClick={onMenuClick}
        aria-label="Open sidebar menu"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <h1 className="text-2xl font-bold text-gray-800 flex-1 md:ml-0 ml-2">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          aria-label="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 00-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
          U
        </div>
      </div>
    </header>
  )
}
