import BannerAbout from "../sections/BannerAbout";
import "../css/about.css";
import { blogItems } from "./Blog";

const About = () => {
  return (
    <>
      <BannerAbout />
      <section className="about">
        {/* Who are Section */}
        <div className="who-are">
          <div className="image">
            <img
              src={require("../assets/images/about/a6.jpg")}
              alt="about-img"
            />
          </div>
          <div className="details">
            <h1>Who are we?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>
            Download our <strong>App</strong>
          </h2>
          <video
            loop
            muted
            autoPlay
            src={require("../assets/images/about/1.mp4")}></video>
          <img src={require("../assets/images/about/a1.png")} alt="about-img" />
        </div>

        {/* Blog Section */}
        <div className="our-blog">
          {blogItems.map((blog, i) => {
            return (
              <div key={i} className="blog">
                <div className="image">
                  <img src={blog.blogImg} alt="blog-img" />
                </div>
                <div className="info">
                  <h2>{blog.blogName}</h2>
                  <p>{blog.info}</p>
                  <strong>
                    {blog.update} <i className="fa-solid fa-arrow-right"></i>
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
