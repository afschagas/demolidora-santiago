import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/:slug" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
