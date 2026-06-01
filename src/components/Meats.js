import React, { useState } from "react";

function Meats({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("meats");

  const products = {
    meats: [
      {
        id: 301,
        name: "Chicken",
        oldPrice: 500,
        price: 450,
        discount: "15%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/034/763/859/small_2x/ai-generated-raw-chicken-meat-free-png.png"
      },
      {
        id: 302,
        name: "Mutton",
        oldPrice: 1200,
        price: 1000,
        discount: "2%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/043/101/752/small_2x/raw-lamb-steak-and-meat-on-transparency-background-isolated-gourmet-meal-png.png"
      },
      {
        id: 303,
        name: "Pork",
        oldPrice: 800,
        price: 700,
        discount: "10%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/044/650/670/small_2x/a-raw-pork-chop-garnished-with-a-sprig-of-rosemary-ready-for-cooking-png.png"
      },
      {
        id: 304,
        name: "Duck",
        oldPrice: 1500,
        price: 1300,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/059/063/748/small_2x/closeup-of-several-slices-of-raw-pork-loin-meat-garnished-with-fresh-parsley-isolated-on-transparent-background-png.png"
      }
      
    ],

    seafood: [
      {
        id: 401,
        name: "Crab",
        oldPrice: 1500,
        price: 1300,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/049/514/528/small_2x/closeup-of-boiled-crab-transparent-png.png"
      },
      {
        id: 402,
        name: "Prawns",
        oldPrice: 900,
        price: 800,
        discount: "10%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/056/565/911/small_2x/shrimp-seafood-three-cooked-prawns-on-transparent-background-png.png"
      },
      {
        id: 403,
        name: "Salmon Fish",
        oldPrice: 1000,
        price: 800,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/059/952/892/small_2x/fresh-atlantic-salmon-fillet-isolated-on-transparent-background-healthy-seafood-free-png.png"
      },
      {
        id: 404,
        name: "Lobster",
        oldPrice: 2000,
        price: 1500,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/053/648/589/small_2x/lobster-isolate-on-white-background-png.png"
      },
      {
        id: 405,
        name: "Squid",
        oldPrice: 900,
        price: 700,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/060/240/479/small_2x/fresh-squid-close-up-on-transparent-background-png.png"
      },
      {
        id: 406,
        name: "Octopus",
        oldPrice: 2200,
        price: 1800,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/714/139/small_2x/ai-generated-vibrant-underwater-octopus-on-transparent-background-stock-png.png"
      },
      {
        id: 407,
        name: "Mullet Fish (Madavai)",
        oldPrice: 400,
        price: 200,
        discount: "50%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/068/871/315/small_2x/fresh-fish-trio-on-transparency-background-showcasing-their-shiny-scales-and-vibrant-eyes-perfect-for-culinary-presentations-or-seafood-dishes-png.png"
      },
      {
        id: 408,
        name: "Red Snapper (Sankara)",
        oldPrice: 1200,
        price: 1000,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/882/879/small_2x/fresh-vibrant-red-snapper-ready-for-culinary-use-perfect-for-restaurant-menus-and-seafood-recipes-png.png"
      },
      {
        id: 409,
        name: "Sardine (Mathi)",
        oldPrice: 300,
        price: 200,
        discount: "10%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/651/945/small_2x/a-single-fresh-whole-sardine-fish-with-sleek-reflective-silver-scales-and-a-blue-back-isolated-on-a-transparent-background-for-easy-use-png.png"
      },
      {
        id: 410,
        name: "Barracuda (Sheela)",
        oldPrice: 1300,
        price: 800,
        discount: "45%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/047/120/471/small_2x/barracuda-animal-illustration-watercolor-style-png.png"
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
      <h2>Meats & Seafood</h2>

      <div className="tabs">
        <button
          className={activeTab === "meats" ? "active-tab" : ""}
          onClick={() => setActiveTab("meats")}
        >
          Meats
        </button>

        <button
          className={activeTab === "seafood" ? "active-tab" : ""}
          onClick={() => setActiveTab("seafood")}
        >
          Seafood
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

export default Meats;