import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAppDispatch } from "../../../redux/hooks";
import { changePopUp } from "../../../redux/slice/UI";
import { changePasswordSAPR } from "../../../redux/slice/users";

export default function SAPR2() {
  const dispatch = useAppDispatch();
  //   const {} = useAppSelector(state=>state.UI)
  //   const { activeUser } = useAppSelector((state) => state.user);
  const [formVal, setFormVal] = useState({
    pass1: "",
    pass2: "",
  });
  const [showErr, setShowErr] = useState(false);
  
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
          <h1 className="text-white text-sm">Enter the new password</h1>
          <input
            className="text-sm mt-4 w-full px-2 py-[6px]"
            placeholder="New Password"
            name="pass1"
            value={formVal.pass1}
            onChange={(e) =>
              setFormVal({ ...formVal, [e.target.name]: e.target.value })
            }
          />
          <input
            className="text-sm mt-4 w-full px-2 py-[6px]"
            placeholder="Confirm New Password"
            name="pass2"
            value={formVal.pass2}
            onChange={(e) =>
                setFormVal({ ...formVal, [e.target.name]: e.target.value })
              }
          />
          {showErr && (
            <h4 className="text-YELLOW  text-center font-bold mt-4">
              Password not match try again
            </h4>
          )}
          <div className="flex justify-center items-center gap-12 mt-4">
            <button
              className="bg-YELLOW w-[77px] h-6 rounded-md"
              type="button"
              onClick={() => {
                console.log(formVal)
                if(formVal.pass1 !== formVal.pass2){
                    setShowErr(true)
                } else {
                    dispatch(changePasswordSAPR(formVal.pass1))
                    dispatch(changePopUp("SAPR3"))
                }
              }}
            >
              Change
            </button>
            <button
              className="bg-YELLOW w-[77px] h-6 rounded-md"
              type="button"
              onClick={() => {
                dispatch(changePopUp(null));
              }}
            >
              Cancel
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
