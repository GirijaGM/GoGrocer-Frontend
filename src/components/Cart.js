import { useNavigate } from "react-router-dom";

function Cart({ cart,setCart,setOrders }) {
    const navigate = useNavigate();
    // ➕ increase quantity
  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
  };

  // ➖ decrease quantity
  const decreaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0); // remove if 0

    setCart(updated);
  };

  // remove item
  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
  };

  //  total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

//   proceed to payment 
const handleCheckout = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("Login status:", isLoggedIn, typeof isLoggedIn);

  if (isLoggedIn === "true") {
    navigate("/payment");
  } else {
    alert("Please login first 🔐");
    navigate("/signin");
  }
};
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={styles.card}>

              <img src={item.image} alt={item.name} style={styles.img} />

              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                {/* ➕➖ buttons */}
                <div style={styles.qtyBox}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Total: ₹{item.price * item.quantity}</p>
              </div>

              {/* ❌ remove */}
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>

            </div>
          ))}

          {/* 💰 grand total */}
          <h3>Total Amount: ₹{total}</h3>
  <button 
  className="pay-btn"
  onClick={handleCheckout}>Order</button>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    alignItems: "center"
  },
  img: {
    width: "80px",
    height: "80px"
  },
  qtyBox: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "10px 0"
  }
};

export default Cart;
