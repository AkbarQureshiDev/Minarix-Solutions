import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loader from "./components/Loader";

// Service Components
import DigitalMarketing from "./components/Services/DigitalMarketing";
import GraphicDesigning from "./components/Services/GraphicDesigning";
import SmBranding from "./components/Services/SmBranding";
import VideoEditing from "./components/Services/VideoEditing";
import WebDevelopment from "./components/Services/WebDevelopment";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <div>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/services/sm-branding" element={<SmBranding />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
      </Routes>
    </div>
  );
};

export default App;
