import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import store from './redux/store/store';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);