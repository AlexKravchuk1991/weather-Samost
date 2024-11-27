import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import HistoryPage from "./pages/historyPage/HistoryPage";
import WetherProvider, { WeatherContex } from "./contex/wetherContex";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WetherProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage/>} />
            <Route path="history" element={<HistoryPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </WetherProvider>
  </StrictMode>
);
