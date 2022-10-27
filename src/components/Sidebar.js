import React from "react";
import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsFillFlagFill } from "react-icons/bs";
import { MdHelpCenter, MdHomeFilled } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { CgCardHearts } from "react-icons/cg";
import { GiTwoCoins, GiCarWheel } from "react-icons/gi";
import { TbSword } from "react-icons/tb";

// import Home from '../../public/images/home'

import Duel from "../pages/Duel";
import Error from "../pages/Error";

const Sidebar = () => {
  let icon = "50";

  return (

    <div className="Sidebar absolute font-normal flex items-center flex-col  h-[auto] w-[86px] bg-[#23224A] rounded-[56px] text-white ml-[16px]">
      
        <Link to='/'>
        <div className="flex flex-col items-center mt-10 text-sm cursor-pointer">
          <div className="text-[20px]">
            <MdHomeFilled />
          </div>
          <div className="leading-[30px] text-[12px]">home</div>
        </div>
        </Link>
        

        <Link to="/duel">
        <div className="flex flex-col items-center mt-10 text-sm cursor-pointer text-[#6E6D90]">
          <div className="text-[20px]">
            <TbSword />
          </div>
          <div className="leading-[30px] text-[12px] ">Dual</div>
        </div>
        </Link>
   

   
        <Link to="/poker">
        <div className=" flex flex-col items-center mt-10 text-sm  cursor-pointer text-[#6E6D90]">
          <div className="text-[20px] ">
            <CgCardHearts />
          </div>
          <div className="leading-[30px] text-[12px]">Poker</div>
        </div>
        </Link>
   

        <Link to="/loot">
        <div className="flex flex-col items-center mt-10 text-sm cursor-pointer text-[#6E6D90]">
          <div className="text-[20px]">
            <GiTwoCoins />
          </div>
          <div className="leading-[30px] text-[12px]">Loot</div>
        </div>
        </Link>
   
        <Link to="/wheel">
        <div className="flex flex-col items-center mt-10 text-sm cursor-pointer text-[#6E6D90]">
          <div className="text-[20px]">
            <GiCarWheel />
          </div>
          <div className="leading-[30px] text-[12px]">Wheel</div>
        </div>
        </Link>


        <Link to="/race">
        <div className="flex flex-col items-center mt-10 text-sm  cursor-pointer text-[#6E6D90]">
          <div className="text-[20px]">
            <BsFillFlagFill className="-rotate-45" />
          </div>
          <div className="leading-[30px] text-[12px]">Race</div>
        </div>
        </Link>


        <div
          className={`sec2 flex flex-col text-[#6E6D91] text-[16px] space-y-5 mt-12 mb-10`}
          >
          {/* <div className={`sec2 text-[#6E6D91] text-[${'50px'}]`}> */}
          
         <Link to="/home"><AiFillDollarCircle className="text-[20px] cursor-pointer" /></Link>
         <Link to="/home"><BiLink className="text-[20px] cursor-pointer" /></Link>
         <Link to="/home"><MdHelpCenter className="text-[20px] cursor-pointer" /></Link>
         <Link to="/home"><HiUser className="text-[20px] cursor-pointer" /></Link>
        
        </div>
      
    </div>

 
          
  );
};

export default Sidebar;
