function Nav() {
  return (
    <nav className="nav-padding">
      <div className="container space-between-center">
        <div>
          <a href="#">
            <img src={"images/logo.svg"} alt="Easybank logo" />
          </a>
        </div>
        <div>
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
        <div>
          <button>Request Invite</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
