import React, { useState } from "react";

function Snacks({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("chips");

  const products = {
    chips: [
      {
        id: 901,
        name: "Lays",
        oldPrice: 40,
        price: 25,
        discount: "40%",
        image:"https://png.pngtree.com/png-clipart/20250120/original/pngtree-chinese-introduction-of-lays-potato-chips-png-image_20294143.png"
      },
      {
        id: 902,
        name: "Doritos",
        oldPrice: 50,
        price: 40,
        discount: "20%",
        image:"https://freepngimg.com/thumb/categories/954.png"
      },
      {
        id: 903,
        name: "Pringles",
        oldPrice: 120,
        price: 95,
        discount: "18%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT44Epr_5Lg1jI93aKPXyts54b0tI1uomDmO0hOnlLPKQINpAZfMZjWl0&s"
      },
      {
        id: 904,
        name: "Walkers",
        oldPrice: 70,
        price: 55,
        discount: "15%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekmNuXrlj0lLghhLUjEjZXO-Q4eX1yxiONQ&s"
      },
      {
        id: 905,
        name: "Too Yumm!",
        oldPrice: 60,
        price: 55,
        discount: "5%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AfQ0o2WcVZdOvzoLFku47oUWIqjVtUzRG88pAFwCTQ&s"
      },
      {
        id: 906,
        name: "Bingo",
        oldPrice: 40,
        price: 30,
        discount: "10%",
        image: "https://images-eu.ssl-images-amazon.com/images/I/81oQOYKZHxL._AC_UL375_SR375,375_.jpg"
      }
    ],

    biscuits: [
      {
        id: 1001,
        name: "Oreo",
        oldPrice: 40,
        price: 30,
        discount: "25%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO4LGvyLBLqdnej7c7nI_JqebyN6Uw5ESKg&s"
      },
      {
        id: 1002,
        name: "Good Day",
        oldPrice: 35,
        price: 28,
        discount: "20%",
        image:"https://5.imimg.com/data5/SELLER/Default/2023/9/348288923/GY/ZF/SU/198576891/britannia-good-day-biscuit.png"
      },
      {
        id: 1003,
        name: "Marie Gold",
        oldPrice: 30,
        price: 22,
        discount: "18%",
        image:"https://www.bbassets.com/media/uploads/p/l/264601_19-britannia-vita-marie-gold-biscuits.jpg"
      },
      {
        id: 1004,
        name: "Hide & Seek",
        oldPrice: 45,
        price: 35,
        discount: "15%",
        image:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/9/23/2d1de6ec-ccbc-443a-a7b5-9d3463cb816d_192_1.png"
      },
      {
        id: 1005,
        name: "Parle-G",
        oldPrice: 60,
        price: 30,
        discount: "50%",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/2/NV/UB/EX/146503902/parle-parle-g-biscuit.jpg"
      },
    ]
  };

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="container">
      <h2>Snacks</h2>

      <div className="tabs">
        <button
          className={activeTab === "chips" ? "active-tab" : ""}
          onClick={() => setActiveTab("chips")}
        >
          Chips
        </button>

        <button
          className={activeTab === "biscuits" ? "active-tab" : ""}
          onClick={() => setActiveTab("biscuits")}
        >
          Biscuits
        </button>
      </div>

      <div className="products-row view-all-mode">
        {products[activeTab].map((item) => (
          <div className="product-card" key={item.id}>
            <span className="badge">{item.discount}</span>

            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>

            <div className="price-box">
              <span className="old-price">₹{item.oldPrice}</span>
              <span className="new-price">₹{item.price}</span>
            </div>

            <button
              onClick={() => addToCart(item)}
              className={cart.find((p) => p.id === item.id) ? "added" : ""}
            >
              {cart.find((p) => p.id === item.id)
                ? "Added ✓"
                : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Snacks;