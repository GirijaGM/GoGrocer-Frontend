import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Payment({ cart, setCart, setOrders }) {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  // DEFINE total HERE (TOP LEVEL)
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async() => {
    if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const deliveryTime = localStorage.getItem("deliveryTime");

  // 🚫 BLOCK if order already active
  if (deliveryTime && Date.now() < deliveryTime) {
    alert("You already have an active order 🚚");
    return;
  }

    if (method === "upi") {
      const upiId = "yourupi@okaxis";  // change this
      const name = "My Store";
      const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${total}&cu=INR`;
      window.location.href = upiUrl;
      return; // open UPI app
    } 
    else {
      await axios.post("https://gogrocer-backend.onrender.com/api/orders", {
    items: cart,
    total
  });
      //  DEFINE newOrder INSIDE HERE
      const newOrder = {
        id: Date.now(),
        items: cart,
        total: total,
        method: "cod",
        status: "Active 🚚"
      };
      // ✅ START TIMER HERE
    const newDeliveryTime = Date.now() + 10 * 60 * 1000;
    localStorage.setItem("deliveryTime", newDeliveryTime);

      setOrders(prev => [...prev, newOrder]);
      setCart([]);
      navigate("/success");
    }
  };

  // separate function for UPI confirmation
  const confirmUPIPayment = async() => {
    const deliveryTime = localStorage.getItem("deliveryTime");

  if (deliveryTime && Date.now() < deliveryTime) {
    alert("You already have an active order 🚚");
    return;
  }

  await axios.post("https://gogrocer-backend.onrender.com/api/orders", {
    items: cart,
    total
  });

  
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      method: "upi",
      status: "Order Placed 🛒"
    };
    const newDeliveryTime = Date.now() + 10 * 60 * 1000;
  localStorage.setItem("deliveryTime", newDeliveryTime);

    setOrders(prev => [...prev, newOrder]);
    setCart([]);
    navigate("/success");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Payment Method</h2>

      <label>
        <input
          type="radio"
          value="cod"
          checked={method === "cod"}
          onChange={(e) => setMethod(e.target.value)}
        />
        Cash on Delivery
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="upi"
          checked={method === "upi"}
          onChange={(e) => setMethod(e.target.value)}
        />
        UPI Payment
      </label>

      <h3>Total: ₹{total}</h3>

      <button className="pay-btn" onClick={handlePayment}>
        Pay Now 
      </button>

      {/*  SHOW ONLY FOR UPI */}
      {method === "upi" && (
        <button className="pay-btn" onClick={confirmUPIPayment}>
           Paid ✅
        </button>
      )}
    </div>
  );
}

export default Payment;