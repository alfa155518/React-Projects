export default function Forme({
  charge,
  amount,
  handelAmount,
  handelCharge,
  handelSubmit,
  edit,
}) {
  return (
    <form onSubmit={handelSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            value={charge}
            placeholder="e.g. rent"
            onChange={handelCharge}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amountamount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            placeholder="e.g. 100"
            onChange={handelAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    </form>
  );
}
