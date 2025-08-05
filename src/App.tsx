import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/scrollTop/ScrollTop";
import CartDrower from "./components/cart-divider/CartDrower";

// Lazy loaded pages
const Home = lazy(() => import("./pages/home/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const ProductDetail = lazy(
  () => import("./pages/product-single/ProductDetail")
);

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <CartDrower isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Header onCartClick={() => setCartOpen(true)} />
      <div className="main-content">
        <ScrollToTop />
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
