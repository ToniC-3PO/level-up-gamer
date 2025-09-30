import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles.css';
import './App.css';

// Componentes comunes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TargetCursor from './components/Cursor';

// Páginas
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import Login from "./pages/login";
import NewAccount from "./pages/newaccount";
import Carrito from "./pages/carrito";
import Producto from "./pages/producto";
import Noticias from "./pages/noticias";
import Blogs from "./pages/blogs";
import NewsBlogs from "./pages/newsblogs";
import Eventos from "./pages/eventos";
import Nosotros from "./pages/nosotros";

function App() {
  return (
    <>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/newsblogs" element={<NewsBlogs />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
