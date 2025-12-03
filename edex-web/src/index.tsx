import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import { LandingPage } from "./screens/LandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
