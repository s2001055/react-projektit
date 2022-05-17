import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persons = [
  {
    id: 1,
    name: 'Clark Kent',
    number: '123 4567'
  },

  {
    id: 2,
    name: 'Lois Lane',
    number: '123 5678'
  },

  {
    id: 3,
    name: 'Jimmy Olsen',
    number: '123 6789'
  },

  {
    id: 4,
    name: 'George Taylor',
    number: '123 7890'
  }
]

root.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>
);

reportWebVitals();