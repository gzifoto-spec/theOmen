import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App