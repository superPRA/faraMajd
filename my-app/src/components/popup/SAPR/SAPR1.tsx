import React, { useEffect, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changePopUp, setTimer } from "../../../redux/slice/UI";

export default function SAPR1() {
  const dispatch = useAppDispatch();
  const { timeLeft, deadline } = useAppSelector((state) => state.UI);
  const [timePassed, setTimePassed] = useState(0);
  const milisec = deadline - timePassed;
  const sec = Math.floor(milisec / 1000);
  const min = Math.floor(sec / 60);
  const [value, setValue] = useState('')
  const [showErr, setShowErr] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimePassed(date.getTime() - timeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (sec <= 0) {
    dispatch(changePopUp("APR4"));
    dispatch(setTimer(0))
  }
  return (
    <>
      <div className="w-[340px] text-sm" onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between px-4 h-7 items-center bg-white text-[10px]">
          <h1>Sub Admin Password Recovery</h1>
          <button
            type="button"
            title="close"
            onClick={() => dispatch(changePopUp(null))}
          >
            <AiOutlineCloseSquare className="text-xl" />
          </button>
        </header>
        <main className="bg-BLUE-1 p-6">
          <p className="text-white text-justify  font-bold leading-5 w-full">
            Contact your administrator and then enter the code announced in the
            box below and press the reset button. Doing time: 
            {min > 0 ? min + "min" : sec + "sec"}
          </p>
          <input
            placeholder="say hi"
            className="w-full mt-4 p-2 "
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
          {showErr && (
            <h4 className="text-YELLOW  text-center font-bold mt-4">
              Code wrong try again 
            </h4>
          )}
          <div className="flex justify-center items-center gap-12 mt-4">
            <button
              className="bg-YELLOW w-[77px] h-6 rounded-md"
              type="button"
              onClick={() => {
                dispatch(changePopUp(null));
              }}
            >
              Cancel
            </button>
            <button
              className="bg-YELLOW w-[77px] h-6 rounded-md"
              type="button"
              onClick={() => {
                if(value === 'hi'){
                  dispatch(changePopUp("SAPR2"))
                } else {
                  setShowErr(true)
                }
              }}
            >
              Reset
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
