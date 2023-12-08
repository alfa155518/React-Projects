import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="info">
        <span>Trode In Offer</span>
        <h3>super value deals</h3>
        <h4>on all products</h4>
        <span>See ore today with Apneck</span>
        <form>
          <Link to={"/"}>
            <button className="btn">Shop Now</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Landing;
