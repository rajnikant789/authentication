import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyDFDeu4d7SEf14oOvt2Xf1srXrgxhatfMo",
  authDomain: "authentication-4de1a.firebaseapp.com",
  projectId: "authentication-4de1a",
  storageBucket: "authentication-4de1a.appspot.com",
  messagingSenderId: "557948049995",
  appId: "1:557948049995:web:304a208c21fabf6d378bce"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
