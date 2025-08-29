import React, { useState } from "react";
import type { ChangeEvent } from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-900 p-6">
      <InputField
        label="Username"
        placeholder="Enter username"
        helperText="This will be your login ID"
        value={username}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        variant="outlined"
        size="md"
        clearable
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        passwordToggle
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        invalid={!password}
        errorMessage="Password is required"
        variant="filled"
      />

      <InputField
        label="Search"
        type="search"
        placeholder="Type something..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        clearable
        variant="ghost"
        size="lg"
      />
    </div>
  );
};

export default App;
