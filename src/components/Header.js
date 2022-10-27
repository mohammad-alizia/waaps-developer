import React from "react";
import {RiSettings4Fill} from 'react-icons/ri'

const Header = () => {
  return (
    <div className="header absolute flex place-content-between h-[86px] w-[80%] items-center px-10 border-2 border-white">
      <div className="Logo text-white">Logo</div>
      <div className="setting h-10 w-10 border-2 border-red-300">
        <RiSettings4Fill className="text-white text-[39px]"/>
      </div>
    </div>
  );
};

export default Header;
