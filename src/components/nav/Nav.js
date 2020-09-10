import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://i0.wp.com/lovelondonloveculture.com/wp-content/uploads/2020/08/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&ssl=1"
        alt="Netflix Logo"
        className="nav_logo"
      />

      <img
        src="https://www.jrmyprtr.com/wp-content/uploads/2014/06/messaging-300x300.png"
        alt="Netflix Logo"
        className="nav_avatar"
      />
    </div>
  );
};

export default Nav;
