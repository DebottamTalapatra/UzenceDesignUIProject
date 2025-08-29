import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
      <App2 />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
