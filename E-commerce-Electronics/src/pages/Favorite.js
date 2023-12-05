import { Link } from "react-router-dom";

const Favorite = ({ favorite, setFavorite }) => {
  const removeFavoriteProduct = (product) => {
    const exitProduct = favorite.filter((item) => {
      return item.id !== product.id;
    });

    setFavorite(exitProduct);
  };

  return (
    <>
      {favorite.length === 0 && (
        <div className="empty-cart">
          <h2>Your Favorite Product Is Empty</h2>
          <Link to={"/shop"} className="btn">
            Shop Now
          </Link>
        </div>
      )}

      <div className="favorite-item">
        {favorite.map((item) => {
          return (
            <div key={item.id} className="box">
              <img src={item.image} alt="item" />
              <div className="details">
                <div className="info">
                  <span className="item-category">{item.cat}</span>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">
                    Prise: $<span>{item.price}</span>
                  </p>
                </div>
              </div>
              <div
                className="btn-remove"
                onClick={() => removeFavoriteProduct(item)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorite;
