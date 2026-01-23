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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App
