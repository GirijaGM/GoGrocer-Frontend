import React, { useState } from "react";

function Household({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("cleaning");

  const products = {
    cleaning: [
      {
        id: 1101,
        name: "Detergent Powder",
        oldPrice: 220,
        price: 180,
        discount: "18%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBn0_beZXV1XTSJ2Nrq9GX8PGCW6edCKI0Wg&s"
      },
      {
        id: 1102,
        name: "Dish Wash Liquid",
        oldPrice: 140,
        price: 110,
        discount: "20%",
        image: "https://driftbasket.com/wp-content/uploads/2018/10/Vim-Dishwashing-Liquid-Gel-Lemon-500ml-k.jpg"
      },
      {
        id: 1103,
        name: "Floor Cleaner",
        oldPrice: 180,
        price: 145,
        discount: "19%",
        image:"https://5.imimg.com/data5/SELLER/Default/2022/7/MT/CP/QE/7291980/perfumed-liquid-floor-cleaner.png"
      },
      {
        id: 1104,
        name: "Toilet Cleaner",
        oldPrice: 160,
        price: 125,
        discount: "15%",
        image:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/18/b2abf21d-1612-4234-be13-e092e2bdcd62_HPZI64Y587_MN_18122025.png"
      }
    ],

    essentials: [
      {
        id: 1201,
        name: "Tissue Paper",
        oldPrice: 90,
        price: 70,
        discount: "22%",
        image:"https://5.imimg.com/data5/BJ/JG/MY-28190414/kicthen-towel-tissue-paper.png"
      },
      {
        id: 1202,
        name: "Garbage Bags",
        oldPrice: 100,
        price: 80,
        discount: "20%",
        image:"https://static.vecteezy.com/system/resources/previews/044/267/179/non_2x/black-garbage-bag-isolated-on-transparent-background-free-png.png"
      },
      {
        id: 1203,
        name: "Aluminium Foil",
        oldPrice: 120,
        price: 95,
        discount: "18%",
        image:"https://static.vecteezy.com/system/resources/thumbnails/047/082/653/small/aluminum-foil-paper-on-transparent-background-png.png"
      },
      {
        id: 1204,
        name: "Paper Towels",
        oldPrice: 110,
        price: 85,
        discount: "15%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLJxbiQ_oAqtsKXaGL2ttuDUH9unvbiKtdA&s"
      },
      {
  id: 1205,
  name: "Mop Stick",
  oldPrice: 250,
  price: 199,
  discount: "20%",
  image:"https://static.vecteezy.com/system/resources/thumbnails/044/245/445/small/close-up-of-a-mop-with-green-handle-on-transparent-background-png.png"
},
  
{
  id: 1206,
  name: "Bucket",
  oldPrice: 180,
  price: 140,
  discount: "18%",
  image:"https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-red-plastic-bucket-png-image_14604796.png"
},
{
  id: 1207,
  name: "Dustbin",
  oldPrice: 300,
  price: 240,
  discount: "20%",
  image :"https://static.vecteezy.com/system/resources/thumbnails/055/175/588/small/3d-trash-can-png.png"
},
{
  id: 1208,
  name: "Room Freshener",
  oldPrice: 160,
  price: 125,
  discount: "15%",
  image :"https://5.imimg.com/data5/SELLER/Default/2022/4/CK/TQ/FH/63437982/godrej-aer-air-freshener-spray.png"
},
{
  id: 1209,
  name: "Cleaning Gloves",
  oldPrice: 90,
  price: 70,
  discount: "22%",
  image: "https://static.vecteezy.com/system/resources/previews/050/092/866/non_2x/bright-blue-rubber-gloves-ready-for-hygienic-tasks-or-cleaning-activities-on-a-transparent-background-blue-rubber-gloves-on-transparent-background-free-png.png"
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
      <h2>Household Items</h2>

      <div className="tabs">
        <button
          className={activeTab === "cleaning" ? "active-tab" : ""}
          onClick={() => setActiveTab("cleaning")}
        >
          Cleaning
        </button>

        <button
          className={activeTab === "essentials" ? "active-tab" : ""}
          onClick={() => setActiveTab("essentials")}
        >
          Essentials
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

export default Household;