import React, { useState, useMemo } from "react";
import { Loader2 } from "lucide-react";

// Column type
export type Column<T> = {
  key: string;           // Unique key for rendering
  title: string;         // Header title
  dataIndex: keyof T;    // Key of the row object to display
  sortable?: boolean;    // Is this column sortable
};

// Props type
type DataTableProps<T> = {
  data?: T[];
  columns?: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
};

export default function DataTable<T extends { id?: string | number }>({
  data = [],
  columns = [],
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal! < bVal!) return direction === "asc" ? -1 : 1;
      if (aVal! > bVal!) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  // Toggle column sort
  const toggleSort = (column: Column<T>) => {
    if (!column.sortable) return;
    setSortConfig((prev) => {
      if (prev?.key === column.dataIndex) {
        return { key: column.dataIndex, direction: prev.direction === "asc" ? "desc" : "asc" };
      } else {
        return { key: column.dataIndex, direction: "asc" };
      }
    });
  };

  // Row selection
  const toggleRowSelect = (row: T) => {
    if (!selectable) return;
    let updated: T[];
    if (selectedRows.some((r) => r.id === row.id)) {
      updated = selectedRows.filter((r) => r.id !== row.id);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  return (
    <div className="w-full overflow-x-auto bg-gray-900 p-4 rounded-md">
      {loading ? (
        <div className="flex justify-center items-center p-10">
          <Loader2 className="animate-spin text-red-600" size={32} />
        </div>
      ) : !data || data.length === 0 ? (
        <div className="text-red-600 font-bold text-center p-6">No data available</div>
      ) : (
        <table className="min-w-full bg-white rounded-md text-red-600 font-bold">
          <thead>
            <tr>
              {selectable && <th className="px-4 py-2">Select</th>}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-2 cursor-pointer select-none ${col.sortable ? "underline" : ""}`}
                  onClick={() => toggleSort(col)}
                >
                  {col.title}
                  {sortConfig?.key === col.dataIndex && (
                    <span>{sortConfig.direction === "asc" ? " ▲" : " ▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr
                key={row.id || idx}
                className={`border-t border-gray-300 ${
                  selectedRows.some((r) => r.id === row.id) ? "bg-gray-200" : ""
                }`}
              >
                {selectable && (
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.some((r) => r.id === row.id)}
                      onChange={() => toggleRowSelect(row)}
                      className="accent-red-600"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {row[col.dataIndex] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
