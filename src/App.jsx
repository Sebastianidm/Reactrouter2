  
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemones from "./views/Personajes";
import Detalle from "./views/Detalle";


export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/" element={<Pokemones />} />        
        <Route path="//pokemones/:name" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}