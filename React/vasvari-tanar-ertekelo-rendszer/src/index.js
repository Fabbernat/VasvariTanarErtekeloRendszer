import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function HelloWorld() {

  const title = "Vasvári Tanár Értekelő Rendszer";

  return <main>
    <h1 className="greeting center">{title}</h1>
    <p> The app is running. 🎉</p>
    <label for="teacher-select">Tanár kiválasztása</label>
        <br />
    <select name="teachernames" id="teachername-select">
        <option value="null" disabled selected>-- Kérlek, válaszd ki a következő tanár nevét! --</option>
        <option disabled value="404">Nem találtunk egy tanárt sem</option>
    </select>
  </main>
  ;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
