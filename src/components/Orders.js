
function Orders({ orders,setOrders }) {

    const activeOrders = orders.filter(
  (order) =>
    order.status !== "Delivered ✅" &&
    order.status !== "Cancelled ❌"
);
    // ✅ cancel specific order
  const handleCancelOrder = (id) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, status: "Cancelled ❌" };
      }
      return order;
    });

    // update state
    setOrders(updatedOrders);

    // update localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    // stop timer after cancel
  localStorage.removeItem("deliveryTime");

    alert("Order cancelled ❌");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        activeOrders.map(order => (
          <div key={order.id} style={styles.orderBox}>

            <h4>Order ID: {order.id}</h4>

            {/* ✅ STATUS */}
            <p>Status: {order.status || "Active 🟢"}</p>

            {order.items.map(item => (
              <div key={item.id} style={styles.itemRow}>
                <img src={item.image} alt="" style={styles.img} />
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
              </div>
            ))}

            <h3>Total: ₹{order.total}</h3>

            {/* ✅ CANCEL BUTTON PER ORDER */}
            {order.status !== "Delivered ✅" && order.status !== "Cancelled ❌" && (
  <button onClick={() => handleCancelOrder(order.id)} className="cancel-btn">
    Cancel ❌
  </button>
)}

          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  orderBox: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px"
  },
  itemRow: {
    display: "flex",
    gap: "15px",
    marginBottom: "10px",
    alignItems: "center"
  },
  img: {
    width: "60px",
    height: "60px"
  }
};

export default Orders;