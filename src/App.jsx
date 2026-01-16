import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App