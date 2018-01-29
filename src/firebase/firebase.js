import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCumHJmWTXoSo4dA59gfnl1Vvx2FJHADYk',
  authDomain: 'expensify-61c98.firebaseapp.com',
  databaseURL: 'https://expensify-61c98.firebaseio.com',
  projectId: 'expensify-61c98',
  storageBucket: 'expensify-61c98.appspot.com',
  messagingSenderId: '515532295784'
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: 'Karan Bhargava'
  });
