import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import Logo from '../assets/icons/logo.png'
import coin from '../assets/icons/coin.png'
const Header = () => {
  return (
    <div className="header flex justify-between items-center  w-[80vw] items-center px-10  overflow-hidden border-[1px]">
      <div className="Logo text-white"><img src={Logo} alt="logo"/></div>
      <div className="flex items-center justify-center w-[auto] gap-[20rem] ml-[20rem] text-white  float-right">
        <div className=" text-[12px]">center the cashier every page</div>
        <div className=" header-gradient flex  justify-center items-center gap-6  text-[12px] h-[38px] w-[152px] rounded-full font-normal">
          <p><img src={coin} alt="cashier-coins"/></p>
          <p className="text-[#FD9F28] text-[12px] leading-[12px] ">cashier</p>
        </div>
      </div>
      <div className="setting flex h-10 w-auto space-x-3 mr-[5rem]">
        <select className="bg-[#1D1B3F] pr-3 border-none text-white text-[12px] focus:outline-none">
          <option>absolute</option>
          <option>bar</option>
          <option>center</option>
          <option>d1</option>
          <option>element</option>
        </select>
        <span className=" flex justify-center items-center h-[38px] w-[38px] bg-[#575DE8] rounded-full">
          <RiSettings4Fill className="text-white text-[19px]" />
        </span>
      </div>
    </div>
  );
};

export default Header;
