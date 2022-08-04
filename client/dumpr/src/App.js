import './App.css';
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client"
import { useState } from 'react';
const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {

  }
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder='Join' onChange={(e) => {setUsername(e.target.value)}}/>
      <input type="text" placeholder='Room ID...' onChange={(e) => {setRoom(e.target.value)}}/>
      <button>Join A Room</button>
    </div>
  );
}

export default App;
