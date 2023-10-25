import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Dashboard from "./components/Dashboard";
import Promo from "./components/Promo";
import Category from "./components/Category";
import Product from "./components/Product";
import Sidebar from "./layouts/Sidebar";


function App() {
  return (
      <div>
        <Header />
        <Dashboard />
        <Promo />
        <Category />
        <div className="flex">
          <Sidebar />
          <Product />
        </div>
        <main className="container mx-auto p-4">
          <Routes>
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
