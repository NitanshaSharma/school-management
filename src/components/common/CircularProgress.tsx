"use client"

import React from "react"

interface CircularLoaderProps {
  size?: number
  color?: string
  fullPage?: boolean
}

export default function CircularLoader({
  size = 32,
  color = "text-blue-600",
  fullPage = false,
}: CircularLoaderProps) {
  const loader = (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        borderStyle: "solid",
      }}
    />
  )

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
        {loader}
      </div>
    )
  }

  return <div className="flex items-center justify-center">{loader}</div>
}
