import React, { useState } from "react";

function Beverages({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("hot");

  const products = {
    hot: [
      {
        id: 701,
        name: "Coffee",
        oldPrice: 180,
        price: 140,
        discount: "22%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/924/455/small_2x/ai-generated-latte-in-coffee-cup-isolated-on-transparent-background-free-png.png"
      },
      {
        id: 702,
        name: "Tea Powder",
        oldPrice: 320,
        price: 280,
        discount: "35%",
        image: "https://www.shysha.in/wp-content/uploads/2021/10/%E0%B4%95%E0%B5%81%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%81%E0%B4%B5%E0%B4%BF%E0%B4%B3%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8D-8.png"
      },
      {
        id: 703,
        name: "Hot Chocolate",
        oldPrice: 220,
        price: 180,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/059/174/929/small_2x/hot-chocolate-with-marshmallows-in-white-cup-cozy-and-inviting-clip-art-on-a-transparency-background-free-png.png"
      },
      {
        id: 704,
        name: "Green Tea",
        oldPrice: 150,
        price: 110,
        discount: "25%",
        image: "https://organicindia.com/cdn/shop/files/TGTClassic_front.png?v=1765866321&width=1946"
      }
    ],

    cold: [
      {
        id: 801,
        name: "Coca Cola",
        oldPrice: 60,
        price: 45,
        discount: "25%",
        image: "https://static.vecteezy.com/system/resources/previews/054/314/897/non_2x/bottles-and-can-coca-cola-free-png.png"
      },
      {
        id: 802,
        name: "Orange Juice",
        oldPrice: 90,
        price: 70,
        discount: "20%",
        image: "https://patanjaliayurved.org/wp-content/uploads/2016/08/Orange-juice-1ltr-300-300.png"
      },
      {
        id: 803,
        name: "Bovonto",
        oldPrice: 65,
        price: 45,
        discount: "20%",
        image: "https://www.bbassets.com/media/uploads/p/l/40013024_4-bovonto-carbonated-beverage-sweetened.jpg"
      },
      {
        id: 804,
        name: "Cold Coffee",
        oldPrice: 120,
        price: 95,
        discount: "18%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/035/906/997/small_2x/ai-generated-iced-coffee-splash-in-a-cup-with-coffee-beans-free-png.png"
      },
      {
        id: 805,
        name: "7up",
        oldPrice: 55,
        price: 40,
        discount: "15%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/054/314/789/small_2x/bottle-of-7up-soda-free-png.png"
      },
      {
        id: 806,
        name: "Frooti",
        oldPrice: 85,
        price: 60,
        discount: "25%",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/80bbcd00-fd0a-4cc0-a983-2eaa83ebee4d.png?bg_token=color.background.quaternary"
      }
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
      <h2>Beverages</h2>

      <div className="tabs">
        <button
          className={activeTab === "hot" ? "active-tab" : ""}
          onClick={() => setActiveTab("hot")}
        >
          Hot Drinks
        </button>

        <button
          className={activeTab === "cold" ? "active-tab" : ""}
          onClick={() => setActiveTab("cold")}
        >
          Cold Drinks
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

export default Beverages;