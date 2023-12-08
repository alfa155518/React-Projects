import ShopProduct from "../components/ShopProduct";
import "../css/shop.css";
import BannerShop from "../sections/BannerShop";

const Shop = ({ showProductDetails, addToCart, setProductInCart }) => {
  return (
    <>
      {/* Banner Shop Section */}
      <BannerShop />
      <section className="shop">
        <ShopProduct
          showProductDetails={showProductDetails}
          addToCart={addToCart}
        />
      </section>
    </>
  );
};

export default Shop;
