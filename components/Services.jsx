import "../src/Services.css";

function Services() {
  return (
    <div className="services-container-background">
      <section className="container section-container-spacing">
        <div>
          <h2 className="services-container-h2">Why choose Easybank?</h2>
          <p className="service-descriptions">
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p className="service-descriptions">
            Control your finances like never before.
          </p>
        </div>
        <div className="flex-space-between all-services-container">
          <div className="individual-service-container">
            <figure>
              <img
                src="/images/icon-online.svg"
                alt="Hand holding two credit cards"
              />
            </figure>
            <h3 className="service-titles">Online Banking</h3>
            <p className="service-descriptions">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="individual-service-container">
            <figure>
              <img
                src="/images/icon-budgeting.svg"
                alt="Cell phone with a dollar symbol"
              />
            </figure>
            <h3 className="service-titles">Simple Budgeting</h3>
            <p className="service-descriptions">
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="individual-service-container">
            <figure>
              <img
                src="/images/icon-onboarding.svg"
                alt="A person onboarding two people"
              />
            </figure>
            <h3 className="service-titles">Fast Onboarding</h3>
            <p className="service-descriptions">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="individual-service-container">
            <figure>
              <img src="/images/icon-api.svg" alt="Generic technology icon" />
            </figure>
            <h3 className="service-titles">Open API</h3>
            <p className="service-descriptions">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
