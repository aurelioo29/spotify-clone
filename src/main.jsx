import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayContextProvider from "./context/PlayContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayContextProvider>
        <App />
      </PlayContextProvider>
    </BrowserRouter>
  </StrictMode>
);
