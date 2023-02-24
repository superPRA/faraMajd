import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changePopUp, setTimer } from "../redux/slice/UI";
import { setActiveUser, setLastLogin } from "../redux/slice/users";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Form() {
  const dispatch = useAppDispatch();
  const { adminUsers, subUsers } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const [formVal, setFormVal] = useState({
    username: "",
    password: "",
  });
  function login() {
    function saveLogin(IP: string) {
      const date = new Date();
      localStorage.setItem("username", formVal.username);
      localStorage.setItem(
        "time",
        `${date.getHours() < 0 ? "0" + date.getHours() : date.getHours()}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`
      );
      localStorage.setItem("IP", IP);
      localStorage.setItem(
        "date",
        `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
      );
      localStorage.setItem("status", "failed");
      dispatch(
        setLastLogin({
          date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
          IP: IP,
          time: `${date.getHours() === 0 ? "00" : date.getHours()}:${
            date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
          }`,
          username: formVal.username,
          status: "failed",
        })
      );
    }
    const index = adminUsers.findIndex(
      (item) =>
        item.username === formVal.username && item.password === formVal.password
    );
    if (index !== -1) {
      const date = new Date();
      setLoading(true);
      axios
        .get("https://geolocation-db.com/json/")
        .then((res) => {
          saveLogin(res.data.IPv4);
          setActiveUser(formVal.username);
          dispatch(changePopUp("APR1"));
          dispatch(setTimer(date.getTime()));
        })
        .catch((err) => {
          saveLogin("");
          setActiveUser(formVal.username);
          dispatch(changePopUp("APR1"));
          dispatch(setTimer(date.getTime()));
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const index2 = subUsers.findIndex(
        (item) =>
          item.username === formVal.username &&
          item.password === formVal.password
      );
      if (index2 !== -1) {
        const date = new Date();
        setLoading(true);

        axios
          .get("https://geolocation-db.com/json/")
          .then((res) => {
            saveLogin(res.data.IPv4);
            setActiveUser(formVal.username);
            dispatch(changePopUp("SAPR1"));
            dispatch(setTimer(date.getTime()));
          })
          .catch((err) => {
            saveLogin("");
            setActiveUser(formVal.username);
            dispatch(changePopUp("SAPR1"));
            dispatch(setTimer(date.getTime()));
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  }
  return (
    <div className="flex flex-col gap-4 border-r-2 px-5 border-black">
      <input
        type="text"
        placeholder="User Name:"
        className="p-[11px] rounded-md w-[370px] h-10"
        name="username"
        onChange={(e) =>
          setFormVal({ ...formVal, [e.target.name]: e.target.value })
        }
        value={formVal.username}
      />
      <input
        type="text"
        placeholder="password:"
        className="p-[11px] rounded-md w-[370px] h-10"
        name="password"
        onChange={(e) =>
          setFormVal({ ...formVal, [e.target.name]: e.target.value })
        }
        value={formVal.password}
      />
      <div className="flex w-[370px] gap-2">
        <select
          title="language"
          className="h-10 w-full rounded-md"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Persian">فارسی</option>
        </select>
        <button
          type="button"
          className="h-full w-36 bg-YELLOW rounded-md flex justify-center items-center gap-2"
          onClick={() => {
            login();
          }}
        >
          Login
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </button>
      </div>
    </div>
  );
}
