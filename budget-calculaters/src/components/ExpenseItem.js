export default function Item({ expenses, handelDelete, handelEdit }) {
  const { id, charge, amount } = expenses;
  return (
    <li className="item">
      <div className="info">
        <span className="expenses">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <button className="edit-btn" onClick={() => handelEdit(id)}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className="clear-btn" onClick={() => handelDelete(id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
