// import PersonIcon from '@mui/icons-material/Person';

import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./pages/profile/Profile";

import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import { useContext ,useEffect} from "react";
import { AuthContext } from "./context/AuthContext";
import {LoginSuccessReload} from './context/AuthAction';
function App() {
  const { user , dispatch } = useContext(AuthContext);

  useEffect(()=>{
    console.log(user);
    const userkey=JSON.parse(localStorage.getItem("userkey"));
    dispatch(LoginSuccessReload(userkey));
    console.log(user);
    console.log(userkey);
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
          <Route path="/register" element={user? <Navigate to="/" /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
