import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/templates/Login/Login";
import { Dashboard } from "./components/templates/Dashboard/Dashboard";
import { AllTransactions } from "./components/templates/AllTransactions/AllTransactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Transaction" element={<div>Transaction</div>} />
        <Route path="/AllTransactions" element={<AllTransactions />} />
        <Route path="/Setting" element={<div>Setting</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
