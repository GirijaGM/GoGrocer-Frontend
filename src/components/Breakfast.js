import React, { useState } from "react";

function Breakfast({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("breakfast");

  const products = {
  breakfast: [
    {
      id: 501,
      name: "Bread",
      oldPrice: 50,
      price: 35,
      discount: "30%",
      image: "https://static.vecteezy.com/system/resources/thumbnails/038/243/263/small_2x/ai-generated-sliced-bread-displayed-on-a-transparent-background-isolated-png.png"
    },
    {
      id: 502,
      name: "Corn Flakes",
      oldPrice: 180,
      price: 140,
      discount: "22%",
      image: "https://images.kglobalservices.com/www.kelloggs.sg/en_sg/product/product_924433/prod_img-1360875_sg_08852756304053_2203301642_p_1.png"
    },
    {
      id: 503,
      name: "Oats",
      oldPrice: 120,
      price: 90,
      discount: "25%",
      image: "https://static.vecteezy.com/system/resources/thumbnails/056/565/628/small_2x/oatmeal-with-raspberries-in-wooden-bowl-on-transparent-background-png.png"
    },
    {
      id: 504,
      name: "Peanut Butter",
      oldPrice: 250,
      price: 199,
      discount: "20%",
      image: "https://www.bbassets.com/media/uploads/p/l/40216418_4-myfitness-original-peanut-butter-smooth.jpg"
    },
    {
      id: 505,
      name: "Jam",
      oldPrice: 110,
      price: 80,
      discount: "18%",
      image: "https://assets.unileversolutions.com/v1/85811802.png"
    },
    {
      id: 506,
      name: "Pancake Mix",
      oldPrice: 170,
      price: 130,
      discount: "24%",
      image: "https://www.bettycrocker.in/wp-content/uploads/2022/02/pancake-mix-original-250g.png"
    }
  ],

  dairy: [
    {
      id: 601,
      name: "Milk",
      oldPrice: 70,
      price: 55,
      discount: "15%",
      image: "https://www.bbassets.com/media/uploads/p/l/40149828_1-heritage-toned-milk.jpg"
    },
    {
      id: 602,
      name: "Cheese",
      oldPrice: 200,
      price: 160,
      discount: "20%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLw9r4tD3nCMVM4ryHFmyQNDxohHkTKuflA&s"
    },
    {
      id: 603,
      name: "Butter",
      oldPrice: 120,
      price: 95,
      discount: "18%",
      image: "https://p.kindpng.com/picc/s/761-7613810_amul-butter-250-gm-price-png-download-butter.png"
    },
    {
      id: 604,
      name: "Curd",
      oldPrice: 80,
      price: 60,
      discount: "15%",
      image: "https://dodladairy.com/wp-content/uploads/2025/05/Curd-150mm-TM-PNG.webp"
    },
    {
      id: 605,
      name: "Paneer",
      oldPrice: 150,
      price: 120,
      discount: "20%",
      image: "https://static.vecteezy.com/system/resources/thumbnails/070/082/102/small_2x/wooden-bowl-filled-with-fresh-white-feta-cheese-cubes-garnished-with-rosemary-herb-isolated-on-transparent-background-png.png"
    },
    {
      id: 606,
      name: "Ice Cream",
      oldPrice: 220,
      price: 180,
      discount: "18%",
      image: "https://rukminim2.flixcart.com/image/300/300/kmjhw280/ice-cream/t/n/w/125-ice-cream-rajbhog-125-ml-cup-amul-original-imagffbcyvhmvkde.jpeg"
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
      <h2>Breakfast & Dairy</h2>

      <div className="tabs">
        <button
          className={activeTab === "breakfast" ? "active-tab" : ""}
          onClick={() => setActiveTab("breakfast")}
        >
          Breakfast
        </button>

        <button
          className={activeTab === "dairy" ? "active-tab" : ""}
          onClick={() => setActiveTab("dairy")}
        >
          Dairy
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

export default Breakfast;