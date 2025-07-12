"use client"

import { createContext } from "react"
import { useContext } from 'react'


export const PageTitleContext = createContext<{
  title: string
  setTitle: (title: string) => void
}>({
  title: "Dashboard",
  setTitle: () => {},
})

PageTitleContext.displayName = "PageTitleContext"


export const usePageTitle = () => useContext(PageTitleContext)