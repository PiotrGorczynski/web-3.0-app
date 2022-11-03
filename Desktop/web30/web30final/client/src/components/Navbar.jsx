import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-20 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:font-bold justify-center justify-between items-center p-3">
                
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <img src={logo} alt="logo" className = "w-auto" />
            </div>
            <a href={`https://www.coingecko.com/`} target="_blank" rel="noreferrer">
                <p className="text-white text-base text-center py-2 w-1/6 mx-20  cursor-pointer">Market</p>
            </a>
            <a href={`https://pro.coinbase.com`} target="_blank" rel="noreferrer">
                <p className="text-white text-base text-center py-2 w-1/6 mx-20  cursor-pointer">Exchanges</p>
            </a>
            <a href={`https://www.udemy.com/topic/cryptocurrency/free/`} target="_blank" rel="noreferrer">
                <p className="text-white text-base text-center py-2 w-1/6 mx-20  cursor-pointer">Tutorials</p>
            </a>
            <a href={`https://time.com/nextadvisor/investing/cryptocurrency/best-crypto-wallets/`} target="_blank" rel="noreferrer">
                <p className="text-white text-base text-center py-2 w-1/6 mx-20  cursor-pointer">Wallets</p>
            </a>
            <a href={`https://metamask.io/download/`} target="_blank" rel="noreferrer">
                <p className="bg-[#2952e3] py-2 px-7 mx-20 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</p>
            </a>

        </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start item-end rounded-md blue-glassmorphism text-white animate-slide-in" >
            <li className = "text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)}/>

            </li>
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <img src={logo} alt="logo" className = "w-auto" />
            </div>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />
        ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;