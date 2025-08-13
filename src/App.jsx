import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Academics from "./Pages/Academics/Academics"
import Contact from "./Pages/Contact"

import Sciences from "./Pages/Academics/Sciences"
import Mathematics from "./Pages/Academics/Mathematics"
import Languages from "./Pages/Academics/Languages"
import Humanities from "./Pages/Academics/Humanities"

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/sciences" element={<Sciences />} />
          <Route path="/academics/mathematics" element={<Mathematics />} />
          <Route path="/academics/languages" element={<Languages />} />
          <Route path="/academics/humanities" element={<Humanities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
