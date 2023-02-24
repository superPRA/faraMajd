import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changePopUp } from "../redux/slice/UI";
import APR1 from "./popup/ARP/APR1";
import APR2 from "./popup/ARP/APR2";
import APR3 from "./popup/ARP/APR3";
import APR4 from "./popup/ARP/APR4";
import SAPR1 from "./popup/SAPR/SAPR1";
import SAPR2 from "./popup/SAPR/SAPR2";
import SAPR3 from "./popup/SAPR/SAPR3";
import SAPR4 from "./popup/SAPR/SAPR4";

export default function PopUp() {
  const dispatch = useAppDispatch();
  const { popup } = useAppSelector((state) => state.UI);

  if (popup === null) {
    return null;
  }
  return (
    <div
      className="bg-black bg-opacity-25 backdrop-blur-sm fixed top-0 h-screen w-full flex justify-center items-center"
      onClick={() => dispatch(changePopUp(null))}
    >
      {popup === "APR1" && <APR1 />}
      {popup === "APR2" && <APR2 />}
      {popup === "APR3" && <APR3 />}
      {popup === "APR4" && <APR4 />}
      {popup === "SAPR1" && <SAPR1 />}
      {popup === "SAPR2" && <SAPR2 />}
      {popup === "SAPR3" && <SAPR3 />}
      {popup === "SAPR4" && <SAPR4 />}
    </div>
  );
}
