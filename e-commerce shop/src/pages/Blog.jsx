import BannerBlog from "../sections/BannerBlog";

import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import blog5 from "../assets/images/blog/b5.jpg";

import "../css/blog.css";

export const blogItems = [
  {
    blogImg: blog1,
    blogName: "Marvel Clein",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 19 mins ago",
  },
  {
    blogImg: blog3,
    blogName: "Tristian Ann",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 1 mins ago",
  },
  {
    blogImg: blog2,
    blogName: "Phillip Omosh",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 120 mins ago",
  },
  {
    blogImg: blog4,
    blogName: "Melisa Ivy",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 20 mins ago",
  },
  {
    blogImg: blog5,
    blogName: "Melisa Ivy",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 60 mins ago",
  },
  {
    blogImg: blog1,
    blogName: "Marvel Clein",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 19 mins ago",
  },
  {
    blogImg: blog3,
    blogName: "Tristian Ann",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 1 mins ago",
  },
  {
    blogImg: blog2,
    blogName: "Phillip Omosh",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 120 mins ago",
  },
  {
    blogImg: blog4,
    blogName: "Melisa Ivy",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 20 mins ago",
  },
  {
    blogImg: blog5,
    blogName: "Melisa Ivy",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quibusdam tempore unde aperiam, consectetur harum a eum error,  libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?",
    update: "Last updated 60 mins ago",
  },
];

const Blog = () => {
  return (
    <>
      <BannerBlog />
      <section className="blog">
        <div className="head-section">
          <h3>#Read More</h3>
          <p>Get to know what our trusted customers say...</p>
        </div>
        <div className="our-blog">
          {blogItems.slice(0, 4).map((blog, i) => {
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

export default Blog;
