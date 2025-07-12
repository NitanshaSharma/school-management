"use client"

import { useContext, useEffect } from "react"
import { PageTitleContext } from "@/components/layout/PageTitleContext"

export default function HomePage() {
  const { setTitle } = useContext(PageTitleContext)

  useEffect(() => {
    setTitle("Dashboard")
  }, [setTitle])

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Dashboard</h1>
      <p className="text-gray-500">
        This is your admin dashboard. Use the navigation on the left to explore different sections.
      </p>
    </div>
  )
}
