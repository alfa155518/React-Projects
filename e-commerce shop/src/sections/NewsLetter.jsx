const NewsLetter = () => {
  return (
    <section className="news-letter">
      <div className="left-side">
        <h2>Sign Up for a newsletter</h2>
        <h5>Get email updates on all our special offers</h5>
      </div>
      <form className="right-side">
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
