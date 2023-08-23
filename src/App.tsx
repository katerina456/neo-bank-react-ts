import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loan from "./components/Loan";

import './styles/index.scss';

const App: React.FC = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;