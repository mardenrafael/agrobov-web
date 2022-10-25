import type { NextPage } from "next";
import User from "../api/User/GetUser";
import Login from "../api/Login/login";

const Home: NextPage = () => {
  return (
   <Login />
  );
};

export default Home;
