import BannerContact from "../sections/BannerContact";

import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <BannerContact />
      <section className="contact">
        {/* Map Section */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="contact-map"></iframe>
        </div>

        {/* Info Section */}
        <div className="info">
          <h1>Contact</h1>
          <p>
            <b>Address:</b> Thika town, Naltex building, 2nd floor
          </p>
          <p>
            <b>Phone:</b>{" "}
            <a href="tel:+1234567890">Call us at +1 (234) 567-890</a>
          </p>
          <p>
            <b>Hours:</b> From 8 a.m To 6 p.m
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos
            iusto rerum architecto a eaque consequuntur impedit! Harum earum
            iste, suscipit soluta, culpa necessitatibus quia sit nulla
            doloremque officia cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic
            veniam unde numquam in ullam laudantium odit explicabo itaque!
            Voluptate similique, accusantium consequatur provident soluta
            quaerat maxime adipisci vero sed.
          </p>
        </div>
      </section>
      <section className="send-message">
        <h2>Leave Us A Message</h2>
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Type Your Message" />
          <button className="btn">Send</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
