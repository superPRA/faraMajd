import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAppDispatch } from "../../../redux/hooks";
import { changePopUp } from "../../../redux/slice/UI";

export default function APR4() {
  const dispatch = useAppDispatch();
  //   const {} = useAppSelector(state=>state.UI)
  //   const { activeUser } = useAppSelector((state) => state.user);

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
          <h4 className="text-sm text-white">Time Expired Try Again</h4>
          <button
            className="bg-YELLOW rounded-md w-20 h-6 mt-5"
            type="button"
            onClick={() => dispatch(changePopUp(null))}
          >
            OK
          </button>
        </main>
      </div>
    </>
  );
}
