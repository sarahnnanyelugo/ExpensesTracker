import React, {useState} from 'react';


import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";




const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car insurance",
    amount: "30053",
    date: new Date(2022, 5, 28),
  },
  {
    id: "e2",
    title: "toilet paper",
    amount: "30053",
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "Shopping",
    amount: "30053",
    date: new Date(2019, 0, 28),
  },

  {
    id: "e4",
    title: "picnic",
    amount: "30053",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e5",
    title: "charity",
    amount: "30053",
    date: new Date(2022, 5, 28),
  },
  {
    id: "e6",
    title: "vacation",
    amount: "20053",
    date: new Date(2019, 10, 28),
  },
];
 const  App=()=> {

 const [expenses, setExpenses]= useState(DUMMY_EXPENSES); 
 
const addExpenseHandler = expense =>{
 setExpenses((prevExpenses) =>{
  return[expense, ...prevExpenses];
 }

 );
};

  return (
    <>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses items={expenses} />
    </>
  );
}


export default App;