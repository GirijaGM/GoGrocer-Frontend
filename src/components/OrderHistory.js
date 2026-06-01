function OrderHistory({ orders }) {
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
const now = Date.now();

const validOrders = orders.filter((order) => {
  if (order.status === "Delivered ✅" && order.deliveredAt) {
    return now - order.deliveredAt < oneWeek;
  }

  if (order.status === "Cancelled ❌" && order.cancelledAt) {
    return now - order.cancelledAt < oneWeek;
  }

  return true;
});

  const historyOrders = validOrders.filter(
  (order) =>
    order.status === "Delivered ✅" ||
    order.status === "Cancelled ❌"
);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Order History</h2>

      {historyOrders.length === 0 ? (
        <p>No past orders</p>
      ) : (
        [...historyOrders].reverse().map((order) => (
          <div key={order.id} style={styles.orderBox}>
            <h4>Order ID: {order.id}</h4>
            <h4>Status: {order.status}</h4>

            {order.items.map((item) => (
              <div key={item.id} style={styles.itemRow}>
                <img src={item.image} alt="" style={styles.img} />
                <div>
                  <p>{item.name}</p>
                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <h3>Total: ₹{order.total}</h3>
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

export default OrderHistory;