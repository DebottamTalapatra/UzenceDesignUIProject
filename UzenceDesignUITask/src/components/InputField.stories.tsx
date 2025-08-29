import { useState } from "react";
import type { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Template wrapper to handle state for interactive input
const Template = (args: any) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        args.onChange?.(e);
      }}
    />
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Password: Story = {
  render: Template,
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    passwordToggle: true,
  },
};
