"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Teachers', href: '/teachers' },
  { name: 'Students', href: '#' },
  { name: 'Schedule', href: '#' },
  { name: 'Admin', href: '#' },
  { name: 'Setup', href: '#' },
  { name: 'Timeline', href: '#' },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
        aria-label="Close sidebar overlay"
      />

      {/* Sidebar */}
      <aside
        className={`
          w-64 bg-gray-900 text-white flex flex-col z-50
          fixed inset-y-0 left-0 transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:static md:flex
        `}
        aria-label="Sidebar"
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-800 text-2xl font-bold tracking-wide">
          <span>LOGO</span>
        </div>

        <nav role="navigation" aria-label="Sidebar navigation" className="flex-1 py-6 px-4 space-y-2">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={index}
                href={link.href}
                className={`
                  block px-4 py-2 rounded transition-colors text-base font-medium
                  ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'}
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
