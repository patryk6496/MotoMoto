import React from 'react';
import './App.css';
import RegisterForm from '../src/Components/RegisterForm';
import LoginForm from '../src/Components/LoginForm';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import AddAnnouncement from './Components/AddAnnouncement';
import Favorite from './Components/Favorite';

function App() {
  return (

    <Routes>   
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/AddAnnouncement" element={<AddAnnouncement/>} />
      <Route path="/Favorite" element={<Favorite/>} />
    </Routes>
    

  );
}

export default App;