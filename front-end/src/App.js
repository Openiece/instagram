import React from 'react';
import {  Link } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <div className='row'>
      <Link className='option' to={'/Home'}>Home</Link>
      <Link className='option' to={'/Signin'}>Sign in</Link>
      <Link className='option' to={'/Signup'}>Sign up</Link>
    </div>
  );
}

export default App;
