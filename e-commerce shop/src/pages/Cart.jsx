import { Link } from "react-router-dom";

const Cart = ({ productInCart, setProductInCart }) => {
  // Remove Item From Cart
  const removeItem = (product) => {
    const selectedItem = productInCart.filter((item) => {
      return item !== product;
    });
    document.documentElement.querySelector(".side-left-nav span").innerHTML--;
    setProductInCart(selectedItem);
  };

  // Plus Product Price
  const plusNumberOfProduct = (e, product) => {
    let targetProduct = e.target.parentElement.parentElement;
    targetProduct.querySelector(".product-number strong").innerHTML++;
    const selectedItem = productInCart.find((item) => {
      return item.id === product.id;
    });
    setProductInCart(
      productInCart.map((currElem) => {
        return currElem.id === product.id
          ? { ...selectedItem, qty: selectedItem.qty + 1 }
          : currElem;
      })
    );
  };

  // Minus Product Price
  const minusNumberOfProduct = (e, product) => {
    let targetProduct = e.target.parentElement.parentElement;
    if (targetProduct.querySelector(".product-number strong").innerHTML <= 1) {
      e.preventDefault();
    } else {
      targetProduct.querySelector(".product-number strong").innerHTML--;
      const selectedItem = productInCart.find((item) => {
        return item.id === product.id;
      });
      setProductInCart(
        productInCart.map((currElem) => {
          return currElem.id === product.id
            ? { ...selectedItem, qty: selectedItem.qty - 1 }
            : currElem;
        })
      );
    }
  };

  // Sum Total Price
  let allProductCost = productInCart.reduce((acc, curr) => {
    return parseInt(acc + curr.qty * curr.price);
  }, 0);

  return (
    <>
      {/* Check if There Product Or Not to Show This Part */}
      {productInCart.length === 0 && (
        <h1 className="empty-cart-head">Your Cart Is Empty</h1>
      )}

      <section className="cart">
        {productInCart.map((product) => {
          return (
            <div key={product.id} className="product-cart">
              <div className="close" onClick={() => removeItem(product)}>
                <i className="fa-solid fa-close"></i>
              </div>
              <div className="img-cart">
                <img src={product.image} alt="cart-img" />
              </div>
              <div className="details">
                <h2>{product.name}</h2>
                <p>
                  Product Brand: <b>{product.brand}</b>
                </p>
                <p>
                  Product Price:${" "}
                  <b className="price">
                    {Math.round(product.price) * product.qty}
                  </b>
                </p>
                <p>
                  Product Rate: <b>{product.rate}</b>
                </p>
                <div className="product-number">
                  <span
                    className="plus"
                    onClick={(e) => plusNumberOfProduct(e, product)}>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  <strong>1</strong>
                  <span
                    className="minus"
                    onClick={(e) => minusNumberOfProduct(e, product)}>
                    <i className="fa-solid fa-minus"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* Check if There Product Or Not to Show This Part */}
      {productInCart.length > 0 && (
        <div className="total">
          <div className="left-side">
            Total Price:$ <span>{allProductCost}</span>
          </div>
          <div className="right-side">
            <Link to={"payment"} className="btn">
              Proceed To Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
