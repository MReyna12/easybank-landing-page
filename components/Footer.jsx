import "../src/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="container space-between-center footer-container-spacing">
        <div className="display-flex-only column-center-footer-items">
          <div className="footer-logo-socials-layout">
            <div>
              <a href="#">
                <img src="/images/logo-white.svg" alt="Easybank logo" />
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
            <div className="top-footer-nav-margin text-align-center">
              <ul className="footer-nav-items-spacing">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="text-align-center">
              <ul className="footer-nav-items-spacing">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-nav-items-spacing">
          <div className="align-button-end text-align-center">
            <button>Request Invite</button>
          </div>
          <div>
            <small className="copyright text-align-center">
              &copy; Easybank. All Rights Reserved
            </small>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
