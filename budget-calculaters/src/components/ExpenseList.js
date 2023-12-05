import Item from "./ExpenseItem";

export default function List({
  expenses,
  handelDelete,
  handelEdit,
  clearItem,
}) {
  return (
    <>
      <ul className="list">
        {expenses.map((ex) => {
          return (
            <Item
              key={ex.id}
              expenses={ex}
              handelDelete={handelDelete}
              handelEdit={handelEdit}
            />
          );
        })}
        {expenses.length > 0 && (
          <button className="btn" onClick={clearItem}>
            Clear Expense
            <i className="fa-solid fa-trash btn-icon"></i>
          </button>
        )}
      </ul>
    </>
  );
}
