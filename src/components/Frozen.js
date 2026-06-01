import React, { useState } from "react";

function FrozenFoods({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("snacks");

  const products = {
    snacks: [
      {
        id: 1301,
        name: "French Fries",
        oldPrice: 180,
        price: 140,
        discount: "22%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/046/544/935/small_2x/french-fries-flying-out-of-paper-bucket-isolated-on-a-transparent-background-png.png"
      },
      {
        id: 1302,
        name: "Veg Nuggets",
        oldPrice: 220,
        price: 180,
        discount: "18%",
        image: "https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-a-delightful-serving-of-chicken-nuggets-png-image_10600813.png "     
      },
      {
        id: 1303,
        name: "Frozen Pizza",
        oldPrice: 320,
        price: 260,
        discount: "20%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIvm3pING-x1ohMTvZYEJWXDB78RiuYTc2A&s"
      },
      {
        id: 1304,
        name: "Spring Rolls",
        oldPrice: 200,
        price: 155,
        discount: "15%",
        image: "https://png.pngtree.com/png-clipart/20240915/original/pngtree-delicious-freshly-made-chicken-spring-rolls-with-vegetables-in-tary-png-image_16014179.png"
      }
    ],

    meals: [
      {
        id: 1401,
        name: "Frozen Parotta",
        oldPrice: 120,
        price: 95,
        discount: "18%",
        image: "https://5.imimg.com/data5/IOS/Default/2022/12/FO/SA/KB/63071535/product-jpeg-500x500.png"
      },
      {
        id: 1402,
        name: "Frozen Idly",
        oldPrice: 140,
        price: 110,
        discount: "20%",
        image: "https://www.lakshmistores.com/cdn/shop/products/NEPTUNE-FROZEN-IDLY-WITH-SAMBAR-400G.png?v=1639171427"
      },
      {
        id: 1403,
        name: "Frozen Chapati",
        oldPrice: 130,
        price: 100,
        discount: "17%",
        image: "https://www.generalmillsindiabfs.in/wp-content/uploads/2020/10/Pillsbury-India-tawa-roti-460x460-1.png"
      },
      {
        id: 1404,
        name: "Frozen Burger Patty",
        oldPrice: 210,
        price: 170,
        discount: "19%",
        image: "https://foodservice.mccainindia.com/food-service/assets/upload/product/1514377401_veggie-burger-detail-img.png"
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
      <h2>Frozen Foods</h2>

      <div className="tabs">
        <button
          className={activeTab === "snacks" ? "active-tab" : ""}
          onClick={() => setActiveTab("snacks")}
        >
          Frozen Snacks
        </button>

        <button
          className={activeTab === "meals" ? "active-tab" : ""}
          onClick={() => setActiveTab("meals")}
        >
          Ready Meals
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

export default FrozenFoods;