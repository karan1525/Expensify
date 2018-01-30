import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

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

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});
