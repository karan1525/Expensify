import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';

const expenseDashboard = () => <div>This is from my dashboard component</div>;

const addExpense = () => <div>This is from my add expense component</div>;

const editExpense = () => <div>This is from my edit expense component</div>;

const helpPage = () => <div>This is from my help page component</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={expenseDashboard} />
      <Route path="/create" component={addExpense} />
      <Route path="/edit" component={editExpense} />
      <Route path="/help" component={helpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector('#root'));
