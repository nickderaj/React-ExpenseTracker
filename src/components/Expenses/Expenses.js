import React, { useState } from 'react';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card.js';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const setYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSetYear={setYearHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
