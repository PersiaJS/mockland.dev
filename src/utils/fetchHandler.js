import axios from "axios";
import Cookies from "universal-cookie";

const getInstance = () => {
  const cookies = new Cookies();
  const headers = {
    "Content-Type": "application/json",
  };

  if (cookies.get("auth")) {
    headers["auth"] = `${cookies.get("auth")}`;
  }

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: false,
    headers: headers,
  });

  return instance;
};

export default getInstance;
