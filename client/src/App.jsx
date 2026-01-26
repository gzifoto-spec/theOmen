import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Peliculas from "./pages/MoviesSection"
import DetallesPelicula from "./pages/MovieDetail"
import Formulario from "./pages/FormMovies"
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
          <Route path="/movies" element={<Peliculas />} />
          <Route path="/formmovies" element={<Formulario />} />
          <Route path="/aboutus" element={<Nosotros />} />
          <Route path="/contact" element={<Contacto />} />  
          <Route path="/movies/:id" element={<DetallesPelicula />}  />

        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App
