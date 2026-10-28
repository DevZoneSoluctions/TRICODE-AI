import { useState, useEffect, useCallback } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import GlobalPageLoader from "./components/GlobalPageLoader";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

// ─── Inner layout with per-route page loader ───────────────────────────────
function AppLayout() {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath) {
      setPageLoading(true);
      setPrevPath(location.pathname);
      // Scroll to top instantly when page changes
      window.scrollTo(0, 0);
    }
  }, [location.pathname, prevPath]);

  const handleLoaderDone = useCallback(() => {
    setPageLoading(false);
  }, []);

  const loaderDuration = 900 + Math.random() * 400; // 900ms–1.3s

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Per-route page loader */}
      <AnimatePresence mode="wait">
        {pageLoading && (
          <GlobalPageLoader
            key={location.pathname}
            isLoading={pageLoading}
            duration={loaderDuration}
            onFinished={handleLoaderDone}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// ─── Root App ───────────────────────────────────────────────────────────────
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <HashRouter>
          <ScrollToTop />
          <AppLayout />
        </HashRouter>
      )}
    </>
  );
}

export default App;