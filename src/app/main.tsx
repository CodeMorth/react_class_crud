import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { NavBar } from "../components/organisms/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
  </StrictMode>
);
