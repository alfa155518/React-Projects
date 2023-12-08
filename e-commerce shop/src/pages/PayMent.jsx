import "../css/payment.css";

const PayMent = () => {
  return (
    <section className="payment">
      <div className="payment-cards">
        <h1>Payment Method</h1>
        <div className="card">
          <div className="card-head">
            <h3>Paypal</h3>
            <img
              src={require("../assets/images/pay/pay.png")}
              alt="payment-img"
            />
          </div>
          <form>
            <label htmlFor="paypal">Paypal Email</label>
            <input type="text" placeholder="Paypal Email" id="paypal" />
          </form>
        </div>
        <div className="card">
          <div className="card-head">
            <h3>Credit card</h3>
            <img
              src={require("../assets/images/pay/pay.png")}
              alt="payment-img"
            />
          </div>
          <form>
            <label htmlFor="card-number">Card Number</label>
            <input
              type="number"
              id="card-number"
              placeholder="0000 0000 0000 0000"
              required
            />
            <label htmlFor="Expiry Date">Expiry Date</label>
            <input type="text" id="Expiry Date" placeholder="MM/YY" required />
            <label htmlFor="CVC/CVV">CVC/CVV</label>
            <input type="text" id="CVC/CVV" placeholder="CVC/CVV" required />
          </form>
        </div>
      </div>

      <form className="form-details">
        <h1>Fill the following details for shipping.</h1>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          autoComplete=""
          required
        />
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="1234 Main St" id="address" />
        <label htmlFor="address2">Address 2</label>
        <input type="text" placeholder="Address 2" id="address2" />
        <label htmlFor="city">City</label>
        <input type="text" placeholder="City" id="city" />
        <label htmlFor="state">State</label>
        <input type="text" placeholder="State" id="state" />
        <button className="btn">Proceed To Pay</button>
      </form>
    </section>
  );
};

export default PayMent;
