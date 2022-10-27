import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import Component from "./Component";

const Home = () => {
  return (
    <div className="main flex h-[100vh] w-[100vw] bg-[#1D1B3F]">
      <div className="HSC">
        <div className=" flex-row h-[100vh] w-[80vw]">
          <div className="header border-[1px] border-white h-[10vh] w-[80vw] ">
            {/* Header */}
          </div>
          <div className="flex">
            <div className="flex navbar border-[1px] border-white h-[90vh] w-[10vw] ">
              {/* Sidebar */}
              <Sidebar />
            </div>
            <div className="content border-[1px] border-white h-[90vh] w-[70vw]">
              <Component />
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
