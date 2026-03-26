import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </div>
  );
}
