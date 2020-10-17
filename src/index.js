import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// This method is used to provide React access to the Redux store
// The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux store and 
// dispatch functions throughout your component tree. Provider takes two props, the Redux store and the child components of your app. 
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
);
