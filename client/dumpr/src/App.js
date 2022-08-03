import './App.css';
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <div className="App">
      <p1>Hello</p1>

    </div>
  );
}

export default App;
