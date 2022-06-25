import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Header from './components/common/Header';
import jwtDecode from "jwt-decode";
import Profile from './pages/Profile';
export default function App() {
  const [user, setUser] = useState(0);
  useEffect(() => {
    try{
      const jwt=localStorage.getItem('food');
      const userInfo=jwtDecode(jwt);
      if(jwt){
        toast.success(`Loged In`);
        console.log("jwt  present");
        // this.props.history.push('/home');
      }
      else{
        console.log("jwt not present");
        window.location='/login';
      }
      setUser(userInfo);
      console.log(userInfo.id);
    }catch(e){
      setUser(false);
    }   
  },[]);
  return (
    <>
    <ToastContainer/>
    <div className="wrapper">
      <div className='container-fluid p-0'>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </div>
    </div>
    </>
  );
}