"use client";

import { teachersDataJSON } from "@/data/TeachersData";
import { Teacher } from "@/types/teacher";
import PaginatedTable, { Column } from "../common/PaginatedTable";
import Link from "next/link";

const columns: Column<Teacher>[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "experience", label: "Experience", sortable: true },
  { key: "subject", label: "Subject", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

export default function TeacherList() {
  return (
    <PaginatedTable<Teacher>
      data={teachersDataJSON}
      columns={columns}
      searchKeys={["name", "subject"]}
      filterOptions={[
        {
          key: "status",
          label: "Status",
          options: [
            { label: "All", value: "all" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
        },
      ]}
      renderRow={(t) => (
        <tr key={t.id} className="border-t hover:bg-gray-50 transition">
          <td className="px-4 py-3">
            <Link
              href={`/teachers/${t.id}`}
              className="text-[#F15A29] hover:underline font-medium"
            >
              {t.name}
            </Link>
          </td>
          <td className="px-4 py-3 text-black">{t.experience} yrs</td>
          <td className="px-4 py-3 text-black">{t.subject}</td>
          <td className="px-4 py-3">
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                t.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {t.status}
            </span>
          </td>
        </tr>
      )}
    />
  );
}
