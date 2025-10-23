import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles.css';
import './App.css';

// Componentes comunes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TargetCursor from './components/Cursor';

// Páginas
import Home from "./pages/home";
import Login from "./pages/login";
import NewAccount from "./pages/newaccount";

import Catalogo from "./pages/catalogo";
import Carrito from "./pages/carrito";
import Producto from "./pages/producto";

import Novedadesp from "./pages/novedadesp";
import Noticias from "./pages/noticias";
import Noticia from "./pages/noticia"; 

import Blogs from "./pages/blogs";
import Blog from "./pages/blog";

import Eventos from "./pages/eventos";
import Evento from "./pages/evento";

import Nosotros from "./pages/nosotros";

function App() {

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    setIsTouchDevice(hasTouch);
  }, []);

  useEffect(() => {
  const handleTap = (e) => {
    const ripple = document.createElement("div");
    ripple.className = "tap-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.width = ripple.style.height = "40px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  if (isTouchDevice) {
    window.addEventListener("touchstart", handleTap);
    return () => window.removeEventListener("touchstart", handleTap);
  }
}, [isTouchDevice]);

  return (
    <>
      {!isTouchDevice && (
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      )}
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/novedadesp" element={<Novedadesp />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticia/:id" element={<Noticia />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/evento/:id" element={<Evento />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />

        <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
