import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";
import Welcome from "./pages/welcome/Welcome";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
  
}

export default App;
