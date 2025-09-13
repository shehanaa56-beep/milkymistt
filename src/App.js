import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Chocolate from './pages/Chocolate'; // ✅ correct this path as needed

import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Brochure from "./pages/Brochure";
import NutritionBlogs from "./pages/NutritionBlogs";
import Parlour from "./pages/Parlour";
import AboutUs from "./pages/AboutUs";
import Investors from "./pages/Investors";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
           <Route path="/products/chocolate" element={<Chocolate />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/nutrition" element={<NutritionBlogs />} />
          <Route path="/parlour" element={<Parlour />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<ContactUs />} />
           <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
