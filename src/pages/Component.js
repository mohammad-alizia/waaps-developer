import React from "react";
import { Link, Outlet } from "react-router-dom";
import Comp1 from "../components/Home_Components/comp 1";
import Comp2 from "../components/Home_Components/comp 2";
import Comp3 from "../components/Home_Components/comp 3";
import Comp4 from "../components/Home_Components/comp4";
import Comp5 from "../components/Home_Components/comp5";

const Component = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center p-[13px] relative m-auto">
          <div>
            <Comp1 />
            <Comp2 />
          </div>
          <Comp3 />
        </div>
        <div className="flex justify-center items-center ml-[2.5rem] space-x-[13px]">
          <Comp4 />
          <Comp5 />
        </div>
      </div>
    </div>
  );
};

export default Component;
