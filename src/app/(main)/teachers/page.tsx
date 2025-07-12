"use client"

import { useEffect, useContext, useState } from "react"
import { PageTitleContext } from "@/components/layout/PageTitleContext"
import TeacherList from "@/components/teachers/TeacherList"
import CircularLoader from "@/components/common/CircularProgress"
import Tabs from "@/components/common/Tabs"
import AddTeacher from "@/components/teachers/AddTeacher"

export default function TeachersPage() {
  const { setTitle } = useContext(PageTitleContext)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("List")

  useEffect(() => {
    setTitle("Teachers")
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [setTitle])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <CircularLoader size={36} />
      </div>
    )
  }

  return (
    <div>
      <Tabs tabs={["List", "Add"]} activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "List" ? (
        <TeacherList />
      ) : (
        <AddTeacher/>
      )}
    </div>
  )
}
