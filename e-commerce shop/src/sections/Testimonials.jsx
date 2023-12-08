const Testimonials = () => {
  return (
    <>
      <div className="head-section">
        <h3>What Our Customers Say</h3>
        <p>Our Customers never miss a bit on Providing feedback</p>
      </div>
      <section className="testimonials">
        <div className="customer">
          <img
            src={require("../assets/images/blog/blog-1.jpg")}
            alt="customer-img"
          />
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              rerum vel sapiente neque! Delectus, commodi?
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
        <div className="customer">
          <img
            src={require("../assets/images/blog/blog-2.jpg")}
            alt="customer-img"
          />
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              rerum vel sapiente neque! Delectus, commodi?
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
        <div className="customer">
          <img
            src={require("../assets/images/blog/blog-3.jpg")}
            alt="customer-img"
          />
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              rerum vel sapiente neque! Delectus, commodi?
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
        <div className="customer">
          <img
            src={require("../assets/images/blog/blog-4.jpg")}
            alt="customer-img"
          />
          <div className="details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              rerum vel sapiente neque! Delectus, commodi?
            </p>
            <span className="btn">learn more</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
