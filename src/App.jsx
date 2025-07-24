import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Academics from "./Pages/Academics"
import Staff from "./Pages/staff"
import Contact from "./Pages/contact"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/academics" element={<Academics />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}
