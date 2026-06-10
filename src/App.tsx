

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}