"use client";

import { useMemo, useState } from "react";

type SortOrder = "asc" | "desc";

export type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
};

interface PaginatedTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKeys?: (keyof T)[];
  filterOptions?: {
    label: string;
    key: keyof T;
    options: { label: string; value: string }[];
  }[];
  renderRow: (item: T) => React.ReactNode;
  pageSize?: number;
}

export default function PaginatedTable<T>({
  data,
  columns,
  searchKeys = [],
  filterOptions = [],
  renderRow,
  pageSize = 5,
}: PaginatedTableProps<T>) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...data];

    // Apply filters
    for (const key in filters) {
      const val = filters[key];
      if (val && val !== "all") {
        result = result.filter((item) => String(item[key as keyof T]) === val);
      }
    }

    // Search
    if (search.trim()) {
      const s = search.toLowerCase();
      result = result.filter((item) =>
        searchKeys.some((key) =>
          String(item[key] ?? "").toLowerCase().includes(s)
        )
      );
    }

    // Sort
    if (sortKey) {
      result.sort((a, b) => {
        const aVal = String(a[sortKey] ?? "").toLowerCase();
        const bVal = String(b[sortKey] ?? "").toLowerCase();

        if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
        if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, filters, search, sortKey, sortOrder, searchKeys]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="border rounded shadow bg-white overflow-hidden text-sm">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 p-4 border-b">
        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="border px-3 py-2 rounded text-black text-sm w-full sm:w-64"
          />

          {filterOptions.map((filter) => (
            <select
              key={String(filter.key)}
              value={filters[filter.key as string] || "all"}
              onChange={(e) => {
                setFilters((prev) => ({
                  ...prev,
                  [filter.key]: e.target.value,
                }));
                setPage(1);
              }}
              className="border px-3 py-2 rounded text-black text-sm"
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {filter.label}: {opt.label}
                </option>
              ))}
            </select>
          ))}
        </div>

        <span className="text-gray-600 self-center">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-black">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  onClick={() => col.sortable && toggleSort(col.key)}
                  className={`px-4 py-2 text-left font-medium cursor-pointer ${
                    col.sortable ? "hover:bg-gray-200" : ""
                  }`}
                >
                  {col.label}
                  {col.sortable && sortKey === col.key && (
                    <span className="ml-1">{sortOrder === "asc" ? "▲" : "▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map(renderRow)
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-6 text-gray-500">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 p-4 border-t bg-gray-50">
        <span className="text-gray-600 text-sm">
          {filtered.length === 0
            ? "0"
            : `${(page - 1) * pageSize + 1}–${Math.min(
                page * pageSize,
                filtered.length
              )} of ${filtered.length}`}
        </span>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-2 py-1 text-sm border rounded text-white bg-[#F15A29] hover:bg-orange-600 disabled:opacity-50"
        >
          &#60;
        </button>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || totalPages === 0}
          className="px-2 py-1 text-sm border rounded text-white bg-[#F15A29] hover:bg-orange-600 disabled:opacity-50"
        >
          &#62;
        </button>
      </div>
    </div>
  );
}
