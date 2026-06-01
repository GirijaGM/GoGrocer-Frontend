import {FiBox, FiCoffee, FiHome, FiShoppingBag,FiArchive, FiTruck, FiShoppingCart, FiGrid} from "react-icons/fi";
import { useRef,useState} from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

function Layout({ showSidebar,cart,setCart}) {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

const scroll = (direction) => {
  const container = scrollRef.current;
 const card = container.querySelector(".product-card");
  const cardWidth = card.offsetWidth + 15; // 15 = gap

  const scrollAmount = cardWidth * 1; // show 4 cards perfectly
    if (direction === "left") {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    // ✅ increase quantity
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  } else {
    // ✅ add new product with quantity
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const products = [
  {
    id: 1,
    name: "Fish Meat",
    oldPrice: 320,
    price: 200,
    discount: "38%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvSVVqieFA_rntRdrSHbGhaZModfuo_vZLQ&s"
  },
  {
    id: 2,
    name: "Nescafe Coffee",
    oldPrice: 400,
    price: 300.07,
    discount: "10%",
    image: "https://www.pngall.com/wp-content/uploads/13/Nescafe-PNG-Images.png"
  },
  {
    id: 3,
    name: "Egg Bites",
    oldPrice: 60,
    price: 45,
    discount: "14%",
    image: "https://www.scooterscoffee.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/e/g/eggbites_bacononion_600x600.png"
  },
  {
    id: 4,
    name: "Caramel Candies",
    oldPrice: 80,
    price: 50,
    discount: "26%",
    image: "https://www.bbassets.com/media/uploads/p/l/40159655_11-alpenliebe-gold-caramel-candy.jpg"
  },
  {
    id: 5,
    name: "Lays",
    oldPrice: 100,
    price: 80,
    discount: "2%",
    image: "https://png.pngtree.com/png-clipart/20250120/original/pngtree-chinese-introduction-of-lays-potato-chips-png-image_20294143.png"
  },
  {
    id: 6,
    name: "Aashirwad Atta",
    oldPrice: 500,
    price: 400.97,
    discount: "10%",
    image: "https://5.imimg.com/data5/MW/RF/QS/SELLER-63806119/aashirvaad-whole-wheat-atta-500x500.png"
  },
  {
    id: 7,
    name: "Dry Fruits",
    oldPrice: 380,
    price: 300.8,
    discount: "6%",
    image: "https://static.vecteezy.com/system/resources/thumbnails/044/813/356/small/bowl-of-dried-fruits-top-view-isolated-on-transparent-background-png.png"
  },
  {
    id: 8,
    name: "Broccoli",
    oldPrice: 350,
    price: 200,
    discount: "15%",
    image: "https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png"
  },
  {
    id: 9,
    name: "Vanilla Greek Yogurt",
    oldPrice: 100,
    price: 80,
    discount: "2%",
    image: "https://www.olympicdairy.com/wp-content/uploads/2021/11/OLYMPIC-GREC-2-VANILLE-650-EN_800x800.png"
  },
  {
    id: 10,
    name: "Fresh Brown Coconut",
    oldPrice: 80,
    price: 50,
    discount: "3%",
    image: "https://static.vecteezy.com/system/resources/thumbnails/058/270/840/small/closeup-of-whole-ripe-fresh-organic-brown-coconut-fruit-on-white-background-png.png"
  },
  {
    id: 11,
    name: "Organic Sweet Lime",
    oldPrice: 50,
    price: 20,
    discount: "3%",
    image: "https://t3.ftcdn.net/jpg/00/94/78/54/360_F_94785428_AkVRdHBwAZJYkBvdpUQKMyEy4Ip8HqJH.jpg"
  },
  {
    id: 12,
    name: "Fresh Banana",
    oldPrice: 200,
    price: 170,
    discount: "2%",
    image: "https://static.vecteezy.com/system/resources/thumbnails/033/495/069/small_2x/banana-fruit-isolated-png.png"
  }

];

  return (
    <div className="container">

      {/* 🔹 SECTION 1 */}
      <div className="section-one">

        {/* LEFT SIDEBAR */}
        <div className={`sidebar ${showSidebar ? "show" : "hide"}`}>
          <ul>
            <li onClick={() => navigate("/fruits")}><FiGrid className="cat-icon" /> Fruits & Vegetables</li>
            <li onClick={() => navigate("/meats")}><FiTruck className="cat-icon" /> Meats & Seafood</li>
            <li onClick={() => navigate("/breakfast")}><FiBox className="cat-icon" /> Breakfast & Dairy</li>
            <li onClick={() => navigate("/beverages")}><FiCoffee className="cat-icon" /> Beverages</li>
            <li onClick={() => navigate("/snacks")}><FiShoppingCart className="cat-icon" /> Snacks</li>

            {showSidebar && (
              <>
                <li onClick={() => navigate("/household")}><FiHome className="cat-icon" /> Household Items</li>
                <li onClick={() => navigate("/frozen")}><FiArchive className="cat-icon" /> Frozen Foods</li>
                <li onClick={() => navigate("/bakery")}><FiShoppingBag className="cat-icon" /> Bakery</li>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT BANNER */}
        <div className="banner">
          <h4>
            EXCLUSIVE OFFER <span className="off-clr">-20% OFF</span>
          </h4>
          <h1>Specialist in the grocery store</h1>
          <p>Only this week. Don't miss...</p>
          <button>Shop Now</button>
        </div>

      </div>

      {/* 🔹 SECTION 2 */}
      <div className="section-two">

        {/* LEFT: SMALL AD */}
        <div className="side-banner">
          <h1>Fresh Fruits</h1>
          <p>Up to 30% OFF</p>
        </div>

        {/* RIGHT: PRODUCT CARDS */}
  <div className="slider-container">
    
    <div className="best-seller">
      <div className="best-left">
          <h2>Best Sellers</h2>
          <p>Do not miss the current offers until the end of March.</p>
        </div>
            
            <button
  className="view-btn"
  onClick={() => setShowAll(!showAll)}
>
  {showAll ? "Show Less" : "View All"} <FiArrowRight />
</button>
    </div>

  {/* LEFT ARROW */}
  {!showAll && (
  <button className="arrow left" onClick={() => scroll("left")}>
    <FiChevronLeft />
  </button>
)}

  {/* PRODUCTS */}
   <div className="slider-viewport">
<div
  className={`products-row ${showAll ? "view-all-mode" : ""}`}
  ref={scrollRef}
>
  {products.map((item) => (
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
  className={cart.find(p => p.id === item.id) ? "added" : ""} >
  {cart.find(p => p.id === item.id) ? "Added ✓" : "Add to cart"}
</button>
    </div>
    
  ))}
</div>
{!showAll && (
  <button className="arrow right" onClick={() => scroll("right")}>
    <FiChevronRight />
  </button>
)}
</div>

</div>

</div>

</div>

  );
}

  



export default Layout;