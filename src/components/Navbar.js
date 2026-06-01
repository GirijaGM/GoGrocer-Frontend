import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Navbar({ toggleSidebar }) {
    const [active, setActive] = useState("Home");
    const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className=" nav-content">

        <button className="all-cat" onClick={toggleSidebar}>
          <FaBars style={{ marginRight: "8px" }} />
          All Categories
        </button>

        <div className="menu">
          <span
            className={active === "Home" ? "active" : ""}
            onClick={() => {setActive("Home");
            navigate("/");
            }}
          >
            Home
          </span>

          <span
            className={active === "My Orders" ? "active" : ""}
            onClick={() => {setActive("My Orders");
              navigate("/Orders");
            }
            }
          >
            My Orders
          </span>

          <span
            className={active === "SignIn" ? "active" : ""}
            onClick={() => {setActive("SignIn");
             navigate("/signin");
            }
            }
          >
            Sign In
          </span>

          <span
            className={active === "SignUp" ? "active" : ""}
            onClick={() => {setActive("SignUp");
              navigate("/signup");
            }
            }
          >
            Sign Up
          </span>
          <span
  className={active === "History" ? "active" : ""}
  onClick={() => {
    setActive("History");
    navigate("/history");
  }}
>
  Order History
</span>

        </div>

      </div>
    </div>
  );
}

export default Navbar;