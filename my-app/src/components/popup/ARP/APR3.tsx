import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changePopUp } from "../../../redux/slice/UI";
import { setLastLogin } from "../../../redux/slice/users";

export default function APR3() {
  const dispatch = useAppDispatch();
  const { lastLogin } = useAppSelector((state) => state.user);

  return (
    <>
      <div className="w-48 text-sm" onClick={(e) => e.stopPropagation()}>
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
        <main className="bg-BLUE-1 p-6 text-center">
          <h4 className="text-sm text-white">New password applied</h4>
          <button
            className="bg-YELLOW rounded-md w-20 h-6 mt-5"
            type="button"
            onClick={() => {
              dispatch(changePopUp(null));
              dispatch(
                setLastLogin({
                  date: lastLogin?.date as string,
                  IP: lastLogin?.IP as string,
                  status: "OK",
                  time: lastLogin?.time as string,
                  username: lastLogin?.username as string,
                })
              );
              localStorage.setItem("status", "success");
            }}
          >
            OK
          </button>
        </main>
      </div>
    </>
  );
}
