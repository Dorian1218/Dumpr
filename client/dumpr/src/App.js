import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Welcome from "./pages/welcome/Welcome";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from "./components/signup/Signup";
import { AuthContextProvider } from "./context/UserContext";
import Signin from "./pages/signin/Signin";
import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationsProvider } from "./context/ConversationProvider";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <ContactsProvider>
        <ConversationsProvider>
    <div>
    
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/chat" element={<Dashboard />}></Route>
      </Routes>
    </div>
    </ConversationsProvider>
    </ContactsProvider>
    </AuthContextProvider>
  )
  
}

export default App;
