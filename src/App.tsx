import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
    
        <Route index element={<Login />} />
        <Route path="main" element={<Main />} />
        
    </Routes>
  );
}

export default App;
