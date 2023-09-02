import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import LoanApplicationId from "./pages/LoanApplicationId";
import LoanDocument from "./pages/LoanDocument";
import { setupStore } from "./store";

import './styles/index.scss';

const store = setupStore();

const App: React.FC = () =>  {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/applicationId" element={<LoanApplicationId />} />
          <Route path="/loan/applicationId/document" element={<LoanDocument />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;