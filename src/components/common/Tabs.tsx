"use client"
import React from "react"


interface TabsProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void

}

export default function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 mb-4">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px focus:outline-none ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
