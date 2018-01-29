import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.querySelector('#root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.querySelector('#root')
  );
});
