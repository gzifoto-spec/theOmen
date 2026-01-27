import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Peliculas from "./pages/MoviesSection"
import MovieDetail from "./components/MovieDetail";
import Formulario from "./pages/FormMovies"
import Nosotros from "./pages/AboutUs"
import Contacto from "./pages/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";




function App () {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Peliculas />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/form" element={<Formulario />} />
          <Route path="/aboutus" element={<Nosotros />} />
          <Route path="/contact" element={<Contacto />} />    
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App
