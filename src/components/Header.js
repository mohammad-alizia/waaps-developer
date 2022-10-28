import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import Logo from '../assets/icons/logo.png'
import coin from '../assets/icons/coin.png';
import { useState } from 'react'
import user from '../assets/icons/user11.png';
import  Group from '../assets/icons/Group.png';
import  exchange from '../assets/icons/exchange11.png';
import  ring from '../assets/icons/ring.png';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="header flex justify-between w-[80vw] items-center px-10  overflow-hidden border-[1px]">
      <div className="Logo text-white ml-[30px]"><img src={Logo} alt="logo" /></div>
      <div className="flex items-center justify-center w-[auto] gap-[20rem] ml-[20rem] text-white  float-right">
        <div className=" text-[12px]">center the cashier every page</div>
        <div className=" header-gradient flex  justify-center items-center gap-6  text-[12px] h-[38px] w-[152px] rounded-full font-normal">
          <p><img src={coin} alt="cashier-coins" /></p>
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
        <span className=" flex justify-center items-center h-[38px] w-[38px] bg-[#575DE8] rounded-full" onClick={toggleMenu}  >
          <RiSettings4Fill className="text-white text-[19px]" />
        </span>
        {isMenuOpen ? <div className="bg-[#191537] rounded-[16px] absolute top-[84px] right-[460px] h-[164px] w-[128px] flex-col justify-center items-center">
          <div className="flex justify-center items-center justify-around mt-[10px]">
            <img src={ user } alt="" className="ml-[-8px]"/>
            <span className="text-[#fff]">Profile</span>
          </div>
          <div className=" flex justify-center items-center justify-around mt-[10px]">
            <img src={ exchange } alt="" className="ml-[2px]"/>
            <span className="text-[#fff]">Exchange</span>
          </div>
          <div className=" flex justify-center items-center justify-around mt-[10px]">
            <img src={ ring } alt="" className="ml-[-3px]"/>
            <span className="text-[#fff]">Support</span>
          </div>
          <div className=" flex justify-center items-center justify-around mt-[10px]">
            <img src={ Group } alt="" className="ml-[-1px]"/>
            <span className="text-[#fff]">Sign Out</span>
            
          </div>
         
        </div> :
          null}

      </div>

    </div>
  );
};


export default Header;
