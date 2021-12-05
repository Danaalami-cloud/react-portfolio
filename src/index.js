import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { Wave1, Wave2, Random1, Random2 } from './components/pages/home.js';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const App = () => (
  <div style={styles}>
    <h1> Home Page</h1>

    <Wave1 />
    <Wave2 />
    <Random1 />
    <Random2 />
    );
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
