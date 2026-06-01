function Success() {
  return (
    <div style={styles.container}>
      
      <h1 style={{ color: "green" }}>✔ Order Successful</h1>
      <p>Thank you for your purchase.</p>

      <button onClick={() => window.location.href = "/"}>
        Go to Home
      </button>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  }
};
export default Success;