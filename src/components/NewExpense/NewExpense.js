import React from 'react'; // under the hood, JSX uses this library
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
