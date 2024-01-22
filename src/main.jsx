import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGWm1Dc9vu5NsmpjU22e3FaUTu9S5dZCI",
  authDomain: "curso-react-coder-b2a8c.firebaseapp.com",
  projectId: "curso-react-coder-b2a8c",
  storageBucket: "curso-react-coder-b2a8c.appspot.com",
  messagingSenderId: "573402979582",
  appId: "1:573402979582:web:94c818a792e89693d119af"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
