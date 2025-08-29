import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import type { Column } from "./DataTable";

type SampleData = {
  id: number;
  name: string;
  age: number;
};

const columns: Column<SampleData>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const sampleData: SampleData[] = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Paul", age: 30 },
  { id: 3, name: "George", age: 22 },
  { id: 4, name: "Ringo", age: 22 },
];

// Cast DataTable to generic version
const DataTableSample = DataTable as unknown as React.FC<{
  data: SampleData[];
  columns: Column<SampleData>[];
  selectable?: boolean;
}>;

const meta: Meta<typeof DataTableSample> = {
  title: "Components/DataTable",
  component: DataTableSample,
};

export default meta;
type Story = StoryObj<typeof DataTableSample>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: columns,
    selectable: true,
  },
};
