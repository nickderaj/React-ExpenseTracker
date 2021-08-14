import React, { useState } from 'react';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card.js';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const setYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSetYear={setYearHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
