import { useState } from "react";
import "../src/Nav.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <nav className="nav-padding">
      <div className="container nav-space-between-center">
        <div>
          <a href="#">
            <img src={"images/logo.svg"} alt="Easybank logo" />
          </a>
        </div>

        <ul data-visible={showMenu} className="nav-items mobile-menu">
          <li>
            <a onClick={handleMenuToggle} href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={handleMenuToggle} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={handleMenuToggle} href="#">
              Contact
            </a>
          </li>
          <li>
            <a onClick={handleMenuToggle} href="#">
              Blog
            </a>
          </li>
          <li>
            <a onClick={handleMenuToggle} href="#">
              Careers
            </a>
          </li>
        </ul>

        <div className="navbar-menu">
          <button>Request Invite</button>
        </div>
        <a
          onClick={handleMenuToggle}
          className="navbar-burger"
          role={"button"}
          aria-label="menu"
          aria-expanded={showMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
