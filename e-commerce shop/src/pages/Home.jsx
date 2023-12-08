import Landing from "../sections/Landing";
import Hero from "../sections/Hero";
import FeaturedProducts from "../sections/FeaturedProducts";
import RepairBanner from "../sections/RepairBanner";
import NewArrivals from "../sections/NewArrivals";
import HotDeals from "../sections/HotDeals";
import Testimonials from "../sections/Testimonials";
import NewsLetter from "../sections/NewsLetter";

const Home = () => {
  return (
    <section className="home">
      {/* Landing Section */}
      <Landing />
      {/* Hero Section */}
      <Hero />

      {/* Featured Product Section */}
      <FeaturedProducts />

      {/* Repair Banner Section */}
      <RepairBanner />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Hot Details Section */}
      <HotDeals />

      {/* Testimonials Section */}
      <Testimonials />

      {/* News Letter Section */}
      <NewsLetter />
    </section>
  );
};

export default Home;
