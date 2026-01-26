import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Peliculas from "./pages/MoviesSection"
import Formulario from "./pages/FormularioParaAnadirPeliculas"
import Nosotros from "./pages/AboutUs"
import Contacto from "./pages/Contact"
import Footer from "./components/Footer"



function App () {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />    
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App
