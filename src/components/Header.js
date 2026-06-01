import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header({ cartCount, setOrders }) {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState("");
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const savedTime = localStorage.getItem("deliveryTime");

     if (!savedTime) {
  setTimeLeft("");
  return;
}

      const remaining = savedTime - Date.now();

      if (remaining <= 0) {
        setTimeLeft("Delivered ✅");
        
        // setProgress(100);
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

  if (savedOrders.length > 0) {
    const updatedOrders = savedOrders.map((order, index) => {
      if (index === savedOrders.length - 1) {
        return { ...order, status: "Delivered ✅" };
      }
      return order;
    },1000);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  }

  localStorage.removeItem("deliveryTime");
  clearInterval(interval);
}
       else {
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);

        let status = "";

        if (minutes >= 6) {
          status = "⏳ Preparing your order";
        } else if (minutes >= 1) {
          status = "🚚 Out for delivery";
        } else {
          status = "📍 Almost there";
        }

        setTimeLeft(`${status} (${minutes}m ${seconds}s)`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [setOrders]);


  return (
    <div className="header-wrapper">
      <div className="container header">

        <Logo />

        <div className="location-wrapper">
          <select className="location">
            <option>Select Location</option>
            <option>Bangalore</option>
            <option>Sivakasi</option>
            <option>Madurai</option>
            <option>Chennai</option>
            <option>Hosur</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search groceries..."
          className="search"
        />

       <div className="timer">
  {timeLeft ? `Delivery: ${timeLeft}` : "⏱ 10 mins delivery"}
</div>
      
        <button className="cart-btn" onClick={() => navigate("/cart")}>
          <div className="cart-icon-wrapper">
            <FaShoppingCart size={20} />
            <span className="cart-count">{cartCount}</span>
          </div>
        </button>

      </div>
    </div>
  );
}

export default Header;