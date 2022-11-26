/*******************************
 * IMPORTS
 *******************************/
// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App
import App from "./App";

// Styling
import "./index.css";

/*******************************
 * CONFIG
 *******************************/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
