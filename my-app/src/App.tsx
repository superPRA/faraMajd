import React, { useEffect, useState } from "react";
import "./App.css";
import pic from "./assets/login-head-img 1.png";
import Form from "./components/Form";
import Info from "./components/Info";
import PopUp from "./components/PopUp";
import { useAppSelector } from "./redux/hooks";

function App() {
  // const {timeLeft} = useAppSelector(state=>state.UI)
  // useEffect(()=>{
  //   console.log(timeLeft)
  // },[timeLeft])
  useEffect(() => {
    console.log(localStorage);
  }, [localStorage]);

  return (
    <>
      <div className="h-screen bg-BLUE-1">
        <img src={pic} alt="" />
        <div className="flex my-20">
          <Form />
          <Info />
        </div>
      </div>
      <PopUp />
    </>
  );
}

export default App;
