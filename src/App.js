import { useState,useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import OrderHistory from "./components/OrderHistory";
import Fruits from "./components/Fruits";
import Meats from "./components/Meats";
import Breakfast from "./components/Breakfast";
import Beverages from "./components/Beverages";
import Snacks from "./components/Snacks";
import Household from "./components/Household";
import Frozen from "./components/Frozen";
import Bakery from "./components/Bakery";

function App() {
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
    if (window.location.pathname !== "/") {
      window.history.replaceState({}, "", "/");
      window.location.reload();
    }}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const [showSidebar, setShowSidebar] = useState(false);

  const [orders, setOrders] = useState(() => {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
});

useEffect(() => {
  localStorage.setItem("orders", JSON.stringify(orders));
}, [orders]);
  return (
      <BrowserRouter>
      <Header cartCount={cart.length} setOrders={setOrders} />
      <Navbar toggleSidebar={() => setShowSidebar(prev => !prev)}/>
      <Routes>
         <Route path="/" element={<Layout showSidebar={showSidebar} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders" element={<Orders orders={orders} setOrders={setOrders}/>} />
        <Route path="/payment" element={<Payment cart={cart} setCart={setCart} setOrders={setOrders}/> } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/history" element={<OrderHistory orders={orders} />} />
        <Route path="/fruits" element={<Fruits cart={cart} setCart={setCart}/>} />
        <Route path="/meats" element={<Meats cart={cart} setCart={setCart}/>} />
        <Route path="/breakfast" element={<Breakfast cart={cart} setCart={setCart}/>} />
        <Route path="/beverages" element={<Beverages cart={cart} setCart={setCart}/>} />
        <Route path="/snacks" element={<Snacks cart={cart} setCart={setCart}/>} />
        <Route path="/household" element={<Household cart={cart} setCart={setCart}/>} />
        <Route path="/frozen" element={<Frozen cart={cart} setCart={setCart}/>} />
        <Route path="/bakery" element={<Bakery cart={cart} setCart={setCart}/>} />
       </Routes>
       
    </BrowserRouter>

  );
}

export default App;