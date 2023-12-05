import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Forme from "./components/ExpenseForm";
import List from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

// initial Value
let initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export default function App() {
  // Set Expenses
  const [expenses, setExpenses] = useState(initialExpense);
  // Set Charge
  const [charge, setCharge] = useState("");
  // Set Amount
  const [amount, setAmount] = useState("");
  // Set Alert
  const [alert, setAlert] = useState({ show: false });
  // Set Edit
  const [edit, setEdit] = useState(false);
  // Set Id
  const [id, setId] = useState(0);

  // Save Item In Local Storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // *********** Function Charge **************** //
  function handelCharge(e) {
    setCharge(e.target.value);
  }

  // *********** Function Amount **************** //
  function handelAmount(e) {
    setAmount(e.target.value);
  }

  // *********** Function Alert **************** //
  function handelAlert({ type, text }) {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1000);
  }

  // *********** Function Submit **************** //
  function handelSubmit(e) {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      // Edited Item
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handelAlert({ type: "success", text: "Item Edited" });
      }

      // Add Item
      else {
        const singleExpense = { id: uuidv4(), charge: charge, amount: amount };
        setExpenses([...expenses, singleExpense]);
        handelAlert({ type: "success", text: "Item Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handelAlert({ type: "danger", text: "Item Not Added" });
    }
  }

  // *********** Function Clear Items **************** //
  const clearItem = () => {
    setExpenses([]);
  };

  // *********** Function Delete Item **************** //
  const handelDelete = (id) => {
    console.log(`Item Deleted : ${id}`);
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handelAlert({ type: "danger", text: "Item Deleted" });
  };

  // *********** Function Edit Item **************** //
  const handelEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget Calculator</h1>
      <main className="App">
        <Forme
          charge={charge}
          amount={amount}
          handelAmount={handelAmount}
          handelCharge={handelCharge}
          handelSubmit={handelSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handelDelete={handelDelete}
          handelEdit={handelEdit}
          clearItem={clearItem}
        />
      </main>
      <h1>
        Total Spending : $
        <span className="total">
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}
