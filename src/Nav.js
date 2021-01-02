import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
      <div className={`nav ${show && "nav__black"}`}>
      <img
        src={process.env.PUBLIC_URL + "580b57fcd9996e24bc43c529.png"}
        alt="Netflix logo"
        className="nav__logo"
      />
    </div>
  );
}

export default Nav;
