import React from "react";
import { Outlet } from "react-router-dom";
import Chat from "../components/Chat";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Component from "./Component";

const Home = () => {
  return (
    <div className=" flex h-[100vh] w-[100vw] bg-[#1D1B3F]">
      <div className="HSC">
        <div className=" flex-row h-[100vh] w-[80vw]">
          <div className="flex justify-center items-center header border-[1px] border-white h-[10vh] w-[80vw] ">
            <Header/>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center navbar border-[1px] border-white h-[90vh] w-[10vw] ">
              <Sidebar />
            </div>
            <div className="content border-[1px] border-white h-[90vh] w-[70vw] text-white">
              <Outlet/>
              
            </div>
          </div>
        </div>
      </div>
      <div className="chat h-full w-full text-black">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
