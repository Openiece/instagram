import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.css';
import App from './App';
import { SignInPage } from './pages/sign-in-page'
import { HomePage } from './pages/home-page';
import { SignUpPage } from './pages/sign-up';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/> } />
      <Route path='Home' element={<HomePage/> } />
      <Route path='SignIn' element={<SignInPage />} />
      <Route path='SignUp' element={<SignUpPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);