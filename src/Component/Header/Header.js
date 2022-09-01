import React from 'react';
import { AiOutlineShop } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdShoppingCart } from 'react-icons/md';


const Header = () => {
    return (
        <div className='flex items-center justify-around py-6 bg-slate-900'>
          <div className="flex hidden lg:block">
          <AiOutlineShop className='text-4xl text-orange-500' ></AiOutlineShop> <h1 className="text-2xl font-bold text-white">Mart Shop</h1>
          </div>
          <div className="flex items-center">
          <p className="hidden lg:block"> <input type="text" placeholder="Search Your Needy Components" class="text-red-500 outline-none border-orange-500 border-4 px-4 mr-6 py-2 bg-transparent rounded-full" /> </p> 
          <button className='hidden lg:block text-2xl px-4 py-3 bg-orange-500 rounded-full text-white'> <BiSearchAlt2/> </button>
         
          </div>
          <div className=" flex gap-11">
            <div className=" text-white">
            <p className="font-bold" ><small>Hello Guest</small></p>
             <p className="font-bold">Sign In</p>
            </div> 
            <div className=" text-white">
            <p className="font-bold" ><small>Your</small></p>
             <p className="font-bold">Shop</p>
            </div>
            <div className="">
            <p>  <MdShoppingCart className="text-3xl inline-block text-orange-500"> </MdShoppingCart><sup className='font-bold text-white' >4</sup> </p> 
            </div>
          </div>
        </div>
    );
};

export default Header;