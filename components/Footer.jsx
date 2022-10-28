function Footer() {
  return (
    <footer>
      <section className="container space-between-center footer-container-spacing">
        <div className="display-flex-only">
          <div className="footer-logo-socials-layout">
            <div>
              <a href="#">
                <img src="/images/logo.svg" alt="Easybank logo" />
              </a>
            </div>
            <div>
              <ul className="footer-socials">
                <li>
                  <a href="#">
                    <img src="/images/icon-facebook.svg" alt="Facebook logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/icon-youtube.svg" alt="Youtube logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/icon-twitter.svg" alt="Twitter logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/icon-pinterest.svg"
                      alt="Pinterest logo"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/icon-instagram.svg"
                      alt="Instagram logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-nav-items-layout">
            <div>
              <ul className="footer-nav-items-spacing">
                <a href="#">
                  <li>About Us</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
                <a href="#">
                  <li>Blog</li>
                </a>
              </ul>
            </div>
            <div>
              <ul className="footer-nav-items-spacing">
                <a href="#">
                  <li>Careers</li>
                </a>
                <a href="#">
                  <li>Support</li>
                </a>
                <a href="#">
                  <li>Privacy Policy</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-nav-items-spacing">
          <div className="align-button-end">
            <button>Request Invite</button>
          </div>
          <div>
            <small>&copy; Easybank. All Rights Reserved</small>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
