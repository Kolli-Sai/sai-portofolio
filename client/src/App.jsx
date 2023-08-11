import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import SkillsPage from "./pages/skills-page";
import ProjectsPage from "./pages/projects-page";
import NotFoundPage from "./pages/not-found-page";
import Navbar from "./components/navbar";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  // Define an array of valid paths
  const validPaths = ["/", "/contact", "/skills", "/projects"];

  // Check if the current path is valid (exists in the validPaths array)
  const isValidPath = validPaths.includes(location.pathname);

  return (
    <>
      <AnimatePresence>
        {isValidPath && <Navbar />}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* ...other routes */}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
