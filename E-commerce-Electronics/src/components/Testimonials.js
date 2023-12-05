const Testimonials = () => {
  return (
    <div className="container container-testimonials">
      <div className="testimonials-box">
        <h3>Our Testimonials</h3>
        <div className="content-testimonials">
          <img src={require("../image/T1.avif")} alt="img-testimonial" />
          <h4>stephan robot</h4>
          <span>Front End Developer</span>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            similique veniam deleniti velit debitis quo nam sed autem ratione
            blanditiis.
          </p>
        </div>
      </div>
      <div className="news-letter">
        <h3>New Letter</h3>
        <strong>Join Our Mailing list</strong>
        <form>
          <input type="email" placeholder="E-mail" />
          <i className="fa-regular fa-envelope"></i>
        </form>
        <button className="btn">subscribe</button>
        <ul className="social">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
