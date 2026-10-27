import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
import { ReactLenis } from 'lenis/react';

// Service Components
import DigitalMarketing from "./components/Services/DigitalMarketing";
import GraphicDesigning from "./components/Services/GraphicDesigning";
import SmBranding from "./components/Services/SmBranding";
import VideoEditing from "./components/Services/VideoEditing";
import VideoShooting from "./components/Services/VideoShooting";
import WebDevelopment from "./components/Services/WebDevelopment";

// Client Work Pages
import ClientWorkPage from "./components/ClientWork/ClientWorkPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLoading]);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div>
        <AnimatePresence mode="wait">
          {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/services/sm-branding" element={<SmBranding />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/video-shooting" element={<VideoShooting />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/dermyxclientwork" element={<ClientWorkPage slug="dermyx" />} />
          <Route path="/neroclientwork" element={<ClientWorkPage slug="nero" />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
