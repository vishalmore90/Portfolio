import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load heavy components
const Services = lazy(() => import("./components/Services"));
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Light mode background */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob will-change-transform"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 will-change-transform"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        {/* Dark mode background */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-normal filter blur-3xl opacity-10 animate-blob will-change-transform"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-normal filter blur-3xl opacity-10 animate-blob animation-delay-2000 will-change-transform"></div>
          <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
        </div>
      </div>
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<div className="min-h-screen" />}>
          <Services />

          <WorkExperience />

          <Projects />

          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
