import React, { useEffect, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changePopUp, setTimer } from "../../../redux/slice/UI";

export default function APR1() {
  const dispatch = useAppDispatch();
  const { timeLeft, deadline } = useAppSelector((state) => state.UI);
  const [isClicked, setIsClicked] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const milisec = deadline - timePassed;
  const sec = Math.floor(milisec / 1000);
  const min = Math.floor(sec / 60);
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
          <h1>Admin Password Recovery</h1>
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
            If you are mi-DaaS administrator, insert lisence file in "Get File"
            button until you can reset password. Doing Time:{" "}
            {min > 0 ? min + "min" : sec + "sec"}
          </p>
          <button
            type="button"
            className="w-full h-8 bg-YELLOW rounded-md mt-3 "
            onClick={() => setIsClicked(true)}
          >
            Get File
          </button>
          {isClicked && (
            <h4 className="text-YELLOW  text-center font-bold mt-4">
              License wrong try again
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
                dispatch(changePopUp("APR2"));
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
