import './App.css';
// import { Routes, Route } from "react-router-dom";
//Dorian was here
import io from "socket.io-client"
import { useState } from 'react';
import Chat from './components/Chat/Chat';
import Topbar from './components/topbar/Topbar';
const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <div className="App">
      <Topbar />
    </div>
  );
}

export default App;
