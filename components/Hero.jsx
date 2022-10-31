import "../src/Hero.css";

function Hero() {
  return (
    <div className="hero-background background-shapes">
      <section className="container hero-container-spacing">
        <div className="h1-container">
          <h1 className="h1-text">Next generation digital banking</h1>
          <p className="h1-subtext">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button>Request Invite</button>
        </div>
        <div className="cellphone-container">
          <img
            src="./images/image-mockups.png"
            alt="Four cellphones with the easybank application showing on them"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
