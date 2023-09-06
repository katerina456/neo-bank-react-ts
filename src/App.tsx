import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import LoanApplicationId from "./pages/LoanApplicationId";
import LoanDocument from "./pages/LoanDocument";
import LoanSign from "./pages/LoanSign";
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
          <Route path="/loan/:user_id" element={<LoanApplicationId />} />
          <Route path="/loan/:user_id/document" element={<LoanDocument />} />
          <Route path="/loan/:user_id/document/sign" element={<LoanSign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;