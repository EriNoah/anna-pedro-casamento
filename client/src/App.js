import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OCasamento from "./paginas/OCasamiento";
import Historia from "./paginas/Historia";
import Home from "./paginas/Home";
import ListaDePresentes from "./paginas/ListaDePresentes";
import Mensagens from "./paginas/Mensagens";
import ConfirmacaoDePresenca from "./paginas/ConfirmacaoDePresenca";

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
        <Route
          path="/confirmacao-de-presenca"
          element={<ConfirmacaoDePresenca />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
