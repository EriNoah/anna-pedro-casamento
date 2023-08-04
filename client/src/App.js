import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OCasamento from "./pages/OCasamiento";
import Historia from "./pages/Historia";
import Home from "./pages/Home";
import ListaDePresentes from "./pages/ListaDePresentes";
import Mensagens from "./pages/Mensagens";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-casamento" element={<OCasamento />} />
        <Route path="/a-nossa-historia" element={<Historia />} />
        <Route path="/lista-de-presentes" element={<ListaDePresentes />} />
        <Route path="/mensagens" element={<Mensagens />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
