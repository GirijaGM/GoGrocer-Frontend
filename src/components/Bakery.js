import React, { useState } from "react";

function Bakery({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("cakes");

  const products = {
    cakes: [
      {
        id: 1501,
        name: "Chocolate Cake",
        oldPrice: 450,
        price: 360,
        discount: "20%",
        image: "https://pngimg.com/uploads/chocolate_cake/chocolate_cake_PNG9.png"
      },
      {
        id: 1502,
        name: "Vanilla Cake",
        oldPrice: 400,
        price: 320,
        discount: "20%",
        image: "https://i.pinimg.com/736x/f8/60/e4/f860e4243928ba4d25230c0642102dde.jpg"
      },
      {
        id: 1503,
        name: "Red Velvet Cake",
        oldPrice: 550,
        price: 450,
        discount: "18%",
        image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA2L3Jhd3BpeGVsX29mZmljZV8zMV9iaXJ0aGRheV9yZWRfdmVsdmV0X2Nha2VfY3V0ZV8zZF9pc29sYXRlZF9vbl8xZjYyNjAwMS0xMDYwLTRlMjQtOGYxNC1lY2Q0YzZmY2M0YTVfMS5qcGc.jpg"
      },
      {
        id: 1504,
        name: "Cup Cakes",
        oldPrice: 180,
        price: 140,
        discount: "22%",
        image: "https://png.pngtree.com/png-vector/20240212/ourmid/pngtree-3d-delicious-decorated-cupcakes-png-image_11738756.png"
      },
      {
  id: 1505,
  name: "Black Forest Cake",
  oldPrice: 500,
  price: 420,
  discount: "16%",
  image: "https://png.pngtree.com/png-clipart/20250124/original/pngtree-festive-black-forest-cake-with-cherries-png-image_20017279.png"
},
{
  id: 1506,
  name: "Strawberry Cake",
  oldPrice: 480,
  price: 390,
  discount: "18%",
  image: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-frosted-strawberry-cake-png-image_17031855.png"
},
{
  id: 1507,
  name: "Butterscotch Cake",
  oldPrice: 450,
  price: 360,
  discount: "20%",
  image: "https://png.pngtree.com/png-clipart/20241113/original/pngtree-caramel-sweet-cake-png-image_16979370.png"
},
{
  id: 1508,
  name: "Pineapple Cake",
  oldPrice: 430,
  price: 340,
  discount: "21%",
  image: "https://png.pngtree.com/png-vector/20240427/ourmid/pngtree-a-delicious-pineapple-cake-with-sauce-isolated-at-transparent-background-png-image_12336494.png"
},
{
  id: 1509,
  name: "Cheese Cake",
  oldPrice: 550,
  price: 460,
  discount: "17%",
  image: "https://img.freepik.com/free-photo/slice-cheesecake-with-strawberries_123827-36017.jpg?semt=ais_hybrid&w=740&q=80"
}
],

    breads: [
      {
        id: 1601,
        name: "Croissant",
        oldPrice: 90,
        price: 70,
        discount: "22%",
        image: "https://png.pngtree.com/png-clipart/20230930/original/pngtree-croissant-cutout-png-file-png-image_13019052.png"
      },
      {
        id: 1602,
        name: "Garlic Bread",
        oldPrice: 120,
        price: 95,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/previews/055/240/187/non_2x/garlic-bread-appetizer-recipe-on-transparent-background-png.png"
      },
      {
        id: 1603,
        name: "Donut",
        oldPrice: 80,
        price: 60,
        discount: "25%",
        image: "https://png.pngtree.com/png-clipart/20240607/original/pngtree-fresh-assorted-homemade-gourmet-glazed-donuts-png-image_15264389.png"
      },
      {
        id: 1604,
        name: "Muffin",
        oldPrice: 100,
        price: 75,
        discount: "18%",
        image: "https://png.pngtree.com/png-vector/20231114/ourmid/pngtree-double-chocolate-chip-muffins-on-transparent-background-png-image_10594470.png"
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
      <h2>Bakery</h2>

      <div className="tabs">
        <button
          className={activeTab === "cakes" ? "active-tab" : ""}
          onClick={() => setActiveTab("cakes")}
        >
          Cakes
        </button>

        <button
          className={activeTab === "breads" ? "active-tab" : ""}
          onClick={() => setActiveTab("breads")}
        >
          Breads & Pastries
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

export default Bakery;