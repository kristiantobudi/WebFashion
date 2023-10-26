import React from "react";
import {   BrowserRouter as Router,
  Route,
  Routes,
  Link } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Dashboard from "./components/Dashboard";
import Promo from "./components/Promo";
import Category from "./components/Category";
import Product from "./components/Product";
import Sidebar from "./layouts/Sidebar";


function App() {
  return (
      <Router>
      <div>

      <Link to="/">Home</Link>
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
          <Route path={"/"} exact element={<Header />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
