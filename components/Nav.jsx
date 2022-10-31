function Nav() {
  return (
    <nav className="nav-padding">
      <div className="container space-between-center">
        <div>
          <a href="#">
            <img src={"images/logo.svg"} alt="Easybank logo" />
          </a>
        </div>
        <div className="nav-items-container navbar-menu">
          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-menu">
          <button>Request Invite</button>
        </div>
        <a
          href="#"
          className="navbar-burger"
          role={"button"}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
