"use client";

import { useContext, useEffect, useState } from "react";
import { PageTitleContext } from "@/components/layout/PageTitleContext";
import Tabs from "@/components/common/Tabs";
import { teachersDataJSON } from "@/data/TeachersData";
import { useParams, notFound } from "next/navigation";
import { TeacherDetailsProps } from "@/types/teacher";



const TeacherDetails = ({ teacherData }: TeacherDetailsProps) => {
  const { id } = useParams();
  const { setTitle } = useContext(PageTitleContext);
  const teacher = teachersDataJSON.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState("Details");

  useEffect(() => {
    if (teacher) setTitle(`Teachers / ${teacher.name}`);
  }, [teacher, setTitle]);

  if (!teacher) return notFound();

  const schedule = teacher.schedule || [
    { day: "Tuesday", start: "2:00 PM", end: "4:00 PM" },
    { day: "Thursday", start: "10:00 AM", end: "11:30 AM" },
  ];

const timeSlots = Array.from({ length: 7 }, (_, i) => {
  const hour = 8 + i;
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  return `${formattedHour}:00`;
});
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      {/* Top Info */}
      <div className="bg-white p-6 rounded shadow border grid md:grid-cols-2 gap-6">
        <div>
      <h1 className="text-2xl font-bold text-[#F15A29] mb-6">{teacherData.name}</h1>
          <p className="text-sm text-gray-700">Role: Teacher</p>
          <p className="text-sm text-gray-700">DOB: {teacher.dob || "01/01/1985"}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Email</p>
            <p>{teacher.email || "teacher@example.com"}</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>{teacher.phone || "(123) 456-7890"}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Address</p>
            <p>{teacher.address || "123 Main St, City, Country"}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={["Details", "Schedule", "Availability", "History"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Details Tab */}
      {activeTab === "Details" && (
  <div className="grid md:grid-cols-2 gap-6">
    {/* Private Qualifications */}
    <div className="bg-white p-4 rounded shadow border text-black overflow-auto">
      <h2 className="font-semibold text-lg mb-3">Private Qualifications</h2>

                {(teacher.privateQualifications && teacher.privateQualifications.length > 0) ? (
                    <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b">
                        <th className="py-1">Name</th>
                        <th className="py-1">Rate ($/hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacher.privateQualifications.map((q, i) => (
                        <tr key={i} className="border-t text-gray-800">
                            <td className="py-2">{q.name}</td>
                            <td className="py-2">${q.rate}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-sm italic">No private qualifications available.</p>
                )}
                </div>

                {/* Group Qualifications */}
                <div className="bg-white p-4 rounded shadow border text-black overflow-auto">
                <h2 className="font-semibold text-lg mb-3">Group Qualifications</h2>

                {(teacher.groupQualifications && teacher.groupQualifications.length > 0) ? (
                    <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 border-b">
                        <th className="py-1">Name</th>
                        <th className="py-1">Rate ($/hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacher.groupQualifications.map((q, i) => (
                        <tr key={i} className="border-t text-gray-800">
                            <td className="py-2">{q.name}</td>
                            <td className="py-2">${q.rate}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-sm italic">No group qualifications available.</p>
                )}
                </div>
            </div>
            )}

      {/* Schedule Tab */}
      {activeTab === "Schedule" && (
        <div className="overflow-x-auto bg-white p-4 rounded shadow border">
          <div className="min-w-[800px]">
            {/* Headers */}
            <div className="grid grid-cols-8">
              <div className="bg-gray-100 text-sm font-semibold text-black text-center py-2 border-r">Time</div>
              {days.map((day) => (
                <div
                  key={day}
                  className="bg-gray-100 text-sm font-semibold text-center text-black py-2 border-r"
                >
                  {day}
                </div>
              ))}
            </div>
            {/* Time rows */}
            {timeSlots.map((slot) => (
              <div key={slot} className="grid grid-cols-8 border-t">
                <div className="text-sm text-center py-1 border-r bg-gray-50 text-gray-600">
                  {slot}
                </div>
                {days.map((day) => {
                  const isActive = schedule.some(
                    (s) => s.day === day && s.start === slot
                  );
                  return (
                    <div
                      key={day + slot}
                      className={`border-r h-8 ${
                        isActive ? "bg-green-200" : ""
                      }`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {["Availability", "History"].includes(activeTab) && (
        <div className="text-gray-500 mt-4 text-sm italic">
          This section is under construction.
        </div>
      )}
    </div>
  );
};

export default TeacherDetails;
