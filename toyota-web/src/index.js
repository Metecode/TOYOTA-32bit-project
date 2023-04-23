import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import {SiteProvider, AuthProvider} from "./context";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppContextProvider>
  </BrowserRouter>
);
