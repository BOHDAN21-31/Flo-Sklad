import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./header.jsx";
import Footer from "./pages/Footer.jsx";
import Golovna from "./Golovna.jsx";
import Team from "./pages/Team.jsx";
import Graph from "./pages/Graph.jsx";
import Contacts from "./pages/Contacts.jsx";
import Pastavka from "./pages/Pastavka.jsx";
import Instruction from "./pages/Instruction.jsx";
import Not_found from "./pages/404_pages.jsx";
import tasks_page from "./pages/task.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Golovna />} />
                <Route path="/team" element={<Team />} />
                <Route path="/graph" element={<Graph />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/postavka" element={<Pastavka />} />
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/404_found" element={<Not_found />} />
                <Route path="/tasks" element={<tasks_page />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);
