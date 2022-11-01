import "../src/Articles.css";

function Articles() {
  return (
    <div className="articles-container-background">
      <section className="container section-container-spacing ">
        <h2 className="articles-container-h2 text-align-center">
          Latest Articles
        </h2>
        <div className="flex-space-between flex-wrap">
          <div className="article-containers">
            <figure>
              <img
                src="/images/image-currency.jpg"
                alt="A pile of various types of currencies"
              />
            </figure>
            <div className="article-text-container">
              <span className="article-authors">By Claire Robinson</span>
              <h3 className="article-title">
                <a href="#">Receive money in any currency with no fees</a>
              </h3>
              <p className="article-text">
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className="article-containers">
            <figure>
              <img
                src="/images/image-restaurant.jpg"
                alt="Fancy dinner plate with food on top"
              />
            </figure>
            <div className="article-text-container">
              <span className="article-authors">By Wilson Hutton</span>
              <h3 className="article-title">
                <a href="#">Treat yourself without worrying about money</a>
              </h3>
              <p className="article-text">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          <div className="article-containers">
            <figure>
              <img src="/images/image-plane.jpg" alt="A wing of an airplane" />
            </figure>
            <div className="article-text-container">
              <span className="article-authors">By Wilson Hutton</span>
              <h3 className="article-title">
                <a href="#">Take your Easybank card wherever you go</a>
              </h3>
              <p className="article-text">
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show
                you...
              </p>
            </div>
          </div>
          <div className="article-containers">
            <figure>
              <img
                src="/images/image-confetti.jpg"
                alt="Confetti falling down"
              />
            </figure>
            <div className="article-text-container">
              <span className="article-authors">By Claire Robinson</span>
              <h3 className="article-title">
                <a href="#">Our invite-only Beta accounts are now live!</a>
              </h3>
              <p className="article-text">
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
