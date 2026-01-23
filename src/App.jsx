import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Peliculas from "./pages/SeccionDePeliculas";
import Formulario from "./pages/FormularioParaAnadirPeliculas";
import Ubicacion from "./pages/Ubicacion";
import Nosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";



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
    </>
  );
}
export default App