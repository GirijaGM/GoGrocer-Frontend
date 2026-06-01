import React, { useState } from "react";

function Fruits({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("fruits");

  const products = {
    fruits: [
      {
        id: 101,
        name: "Apple",
        oldPrice: 180,
        price: 120,
        discount: "33%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/038/772/807/small/ai-generated-isolated-apple-on-transparent-background-generative-ai-png.png"
      },
      {
        id: 102,
        name: "Banana",
        oldPrice: 60,
        price: 40,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/025/063/631/small_2x/banana-with-ai-generated-free-png.png"
      },
      {
        id: 103,
        name: "Orange",
        oldPrice: 100,
        price: 60,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/065/448/887/small_2x/fresh-ripe-orange-with-slice-and-leaf-isolated-on-transparent-free-png.png"
      },
      {
        id: 104,
        name: "Cherrys",
        oldPrice: 200,
        price: 150,
        discount: "50%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/040/334/950/small_2x/ai-generated-fresh-cherry-isolated-on-transparent-background-free-png.png"
      },
      {
        id: 105,
        name: "Lychees",
        oldPrice: 180,
        price: 140,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/040/332/283/small_2x/ai-generated-red-lychee-fruit-isolated-on-transparent-background-free-png.png"
      },
      {
        id: 106,
        name: "Dragon Fruit",
        oldPrice: 220,
        price: 190,
        discount: "30%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/038/935/373/small_2x/ai-generated-dragon-fruit-dragon-pitaya-fruit-pitaya-pitahaya-fruit-pitahaya-half-dragon-fruit-dragon-fruit-transparent-background-dragon-fruit-without-background-png.png"
      },
      {
        id: 107,
        name: "Pomegranate",
        oldPrice: 240,
        price: 200,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/047/307/270/small_2x/fresh-pomegranates-with-leaves-and-stems-free-png.png"
      },
      {
        id: 108,
        name: "Jack Fruit",
        oldPrice: 320,
        price: 250,
        discount: "60%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/075/619/056/small_2x/fresh-jackfruit-segments-tropical-fruit-healthy-food-isolated-png.png"
      },
      {
        id: 109,
        name: "Blueberry",
        oldPrice: 200,
        price: 180,
        discount: "20%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/444/672/small_2x/ai-generated-blueberries-pile-with-blueberry-leaves-on-the-floor-healthy-organic-berry-natural-ingredients-concept-ai-generated-transparency-with-shadow-png.png"
      },
      {
        id: 110,
        name: "Green Grapes",
        oldPrice: 180,
        price: 150,
        discount: "30%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/033/219/601/small_2x/grape-isolated-green-grape-a-yellow-grape-bunch-transparent-background-ai-generative-png.png"
      }
    ],

    vegetables: [
      {
        id: 201,
        name: "Tomato",
        oldPrice: 50,
        price: 30,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/024/107/863/small_2x/a-group-of-tomatoes-isolated-on-transparent-background-ai-generated-png.png"
      },
      {
        id: 202,
        name: "Carrot",
        oldPrice: 70,
        price: 45,
        discount: "25%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/036/572/347/small_2x/ai-generated-fresh-carrot-isolated-free-png.png"
      },
      {
        id: 203,
        name: "Cucumber",
        oldPrice: 50,
        price: 25,
        discount: "25%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/956/711/small_2x/whole-cucumber-with-crisp-slices-on-white-background-for-food-ads-png.png"
      },
      {
        id: 204,
        name: "Potato",
        oldPrice: 100,
        price: 50,
        discount: "50%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/645/740/small_2x/ai-generated-fresh-raw-potatoes-on-transparent-background-image-free-png.png"
      },
      {
        id: 205,
        name: "Potato",
        oldPrice: 70,
        price: 40,
        discount: "60%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/038/015/653/small_2x/ai-generated-onion-cut-in-half-isolated-on-transparent-background-free-png.png"
      },
      {
        id: 206,
        name: "Cauliflower",
        oldPrice: 60,
        price: 25,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/041/713/868/small_2x/ai-generated-fresh-cauliflower-with-green-leaves-on-transparent-background-stock-png.png"
      },
      {
        id: 207,
        name: "Garlic",
        oldPrice: 400,
        price: 200,
        discount: "50%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/044/307/715/small_2x/garlic-isolated-on-transparent-background-png.png"
      },
      {
        id: 208,
        name: "Pumpkin",
        oldPrice: 150,
        price: 100,
        discount: "35%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/057/671/032/small_2x/wonderful-creative-ripe-pumpkin-front-view-cutout-exclusive-png.png"
      },
      {
        id: 209,
        name: "Broccoli",
        oldPrice: 350,
        price: 200,
        discount: "15%",
        image: "https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png"
      },
      {
        id: 210,
        name: "Spinach",
        oldPrice: 50,
        price: 20,
        discount: "40%",
        image: "https://static.vecteezy.com/system/resources/thumbnails/034/616/691/small_2x/bundle-of-fresh-spinach-with-ai-generated-free-png.png"
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
      <h2>Fruits & Vegetables</h2>

      <div className="tabs">
        <button
          className={activeTab === "fruits" ? "active-tab" : ""}
          onClick={() => setActiveTab("fruits")}
        >
          Fruits
        </button>

        <button
          className={activeTab === "vegetables" ? "active-tab" : ""}
          onClick={() => setActiveTab("vegetables")}
        >
          Vegetables
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

export default Fruits;