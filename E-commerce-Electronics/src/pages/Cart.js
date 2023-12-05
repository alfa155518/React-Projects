import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../Cart.css";

const Cart = ({ cart, setCart }) => {
  // Calculate Amount Of Product & increase number of Product
  const plusAmount = (element, e) => {
    let parent = e.target.parentElement.parentElement;
    parent.querySelector(".amount").innerHTML++;
    const exit = cart.find((item) => {
      return item.id === element.id;
    });
    setCart(
      cart.map((currElem) => {
        return currElem.id === element.id
          ? { ...exit, qty: exit.qty + 1 }
          : currElem;
      })
    );
  };

  // Calculate Amount Of Product & decrease number of Product
  const minusAmount = (e, element) => {
    let parent = e.target.parentElement.parentElement;
    if (parent.querySelector(".amount").innerHTML <= 0) {
      e.preventDefault();
    } else {
      parent.querySelector(".amount").innerHTML--;
      const exit = cart.find((item) => {
        return item.id === element.id;
      });
      setCart(
        cart.map((currElem) => {
          return currElem.id === element.id
            ? { ...exit, qty: exit.qty - 1 }
            : currElem;
        })
      );
    }
  };

  // Delete Product
  const deleteProduct = (product) => {
    setCart(
      cart.filter((currElem) => {
        return currElem.id !== product.id;
      })
    );
  };

  let allProductCost = cart.reduce((acc, curr) => {
    return parseInt(acc + curr.qty * curr.price);
  }, 0);

  const checkOutAllProduct = () => {
    setCart([]);
  };

  return (
    <>
      {cart.length === 0 && (
        <div className="empty-cart">
          <h2>Your Shopping Cart Is Empty</h2>
          <Link to={"/shop"} className="btn">
            Shop Now
          </Link>
        </div>
      )}

      <section className="product-cart">
        {cart.map((product) => {
          return (
            <div className="item" key={product.id}>
              <img src={product.image} alt="product" />
              <div className="details">
                <div className="info">
                  <span className="item-category">{product.cat}</span>
                  <h3 className="item-name">{product.name}</h3>
                  <p className="item-price">
                    Prise: $<span>{product.price}</span>
                  </p>
                  <p className="total-price">
                    Total Prise: $<span>{product.price * product.qty}</span>
                  </p>
                </div>
                <div className="crease-decare">
                  <button
                    className="btn-plus"
                    onClick={(e) => plusAmount(product, e)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <span className="amount">0</span>
                  <button
                    className="btn-minus"
                    onClick={(e) => minusAmount(e, product)}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
                <div className="close" onClick={() => deleteProduct(product)}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {cart.length > 0 && (
        <>
          <div className="total-cost">
            <h4>Total Cost:${allProductCost}</h4>
          </div>
          <button className="btn" onClick={() => checkOutAllProduct()}>
            Check out
          </button>
        </>
      )}
      <Footer />
    </>
  );
};

export default Cart;
