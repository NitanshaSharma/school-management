"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import { PageTitleContext } from "./PageTitleContext"
import DashboardLayout from "./DashboardLayout"

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [title, setTitle] = useState("Dashboard")

  // Define routes that should SKIP sidebar/topbar layout
  const noLayoutRoutes = ["/404", "/not-found"]

  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>
  }

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      <DashboardLayout title={title}>
        {children}
      </DashboardLayout>
    </PageTitleContext.Provider>
  )
}
