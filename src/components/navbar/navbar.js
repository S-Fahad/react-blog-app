import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [state, setstate] = useState(false);
  const navbar = [
    { to: "/", desc: "Home", id: 1 },
    { to: "/category/bollywood", desc: "Bollywood", id: 2 },
    { to: "/category/technology", desc: "Technology", id: 3 },
    { to: "/category/hollywood", desc: "Hollywood", id: 4 },
    { to: "/category/fitness", desc: "Fitness", id: 5 },
    { to: "/category/food", desc: "Food", id: 6 },
    { to: "/category/travel", desc: "Travel", id: 7 },
  ];

  const nav = navbar.map((value, index) => (
    <NavLink to={value.to} key={index} exact>
      {value.desc}
    </NavLink>
  ));

  const expandNav = () => setstate((prev) => !prev);

  return (
    <>
      <div className="navbar">
        <div className="nav-flex">
          <div className="nav-heading">
            <div>The</div>
            <div>Siren</div>
          </div>
          <div className="expandNav">
            <button onClick={expandNav}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="nav-content">{nav}</div>
        {state === true && <div className="expandNav-content">{nav}</div>}
      </div>
    </>
  );
}
export default Navbar;
