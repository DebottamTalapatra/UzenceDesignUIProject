import React, { useState } from "react";
import DataTable from "./components/DataTable";
import type { Column } from "./components/DataTable";

// Define the data type
type Person = {
  id: number;
  name: string;
  age: number;
};

const App2: React.FC = () => {
  const [selected, setSelected] = useState<Person[]>([]);

  const data: Person[] = [
    { id: 1, name: "John Lennon", age: 40 },
    { id: 2, name: "Paul McCartney", age: 83 },
    { id: 3, name: "George Harrison", age: 58 },
    { id: 4, name: "Ringo Starr", age: 85 },
  ];

  const columns: Column<Person>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col gap-6">
      <DataTable<Person>
        data={data}
        columns={columns}
        loading={false}
        selectable={true}
        onRowSelect={(rows) => setSelected(rows)}
      />

      <div className="text-red-600 font-bold">
        Selected Rows: {selected.map((r) => r.name).join(", ")}
      </div>
    </div>
  );
};

export default App2;
