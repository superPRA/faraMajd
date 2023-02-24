import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setLastLogin } from "../redux/slice/users";

export default function Info() {
  const dispatch = useAppDispatch();
  const lastLogin = useAppSelector((state) => state.user.lastLogin);
  useEffect(() => {
    const username = localStorage.getItem("username");
    const IP = localStorage.getItem("IP");
    const date = localStorage.getItem("date");
    const time = localStorage.getItem("time");
    const status = localStorage.getItem("status");
    if (
      username !== null &&
      IP !== null &&
      date !== null &&
      time !== null &&
      status !== null
    ) {
      dispatch(
        setLastLogin({
          username,
          IP,
          date,
          time,
          status: status as "failed" | "OK",
        })
      );
    } else {
      dispatch(setLastLogin(null));
    }
  }, []);

  return (
    <div className="px-5 w-full">
      <h4 className="text-BLUE-2">SANAM - FavaMajd Cooperation</h4>
      <h4 className="text-GRAY text-[15px]">
        Remote Desktop and App Solutions
      </h4>
      <h4 className="text-GRAY">Copyright 2014 - 2023</h4>
      <h4 className="text-white mt-4">
        {lastLogin &&
          `Last Login: ${lastLogin.username} , ${lastLogin.IP} , ${lastLogin.date} , ${lastLogin.time}`}
      </h4>
      <h4 className="text-white">{lastLogin && `Status: ${lastLogin.status}`}</h4>
    </div>
  );
}
