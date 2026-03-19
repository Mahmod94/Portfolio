// import { BrowserRouter, Routes, } from "react-router-dom";

// import Hero from "./pages/Hero";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

// export default function App(){
//   return(
//     <>
//       <Hero />
//       <Projects />
//       <Skills />
//       <Contact />
//     </>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}