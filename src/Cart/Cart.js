import React from 'react';
import sell from '../Asset/sell.jpg'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import Subtotal from '../Component/Subtotal/Subtotal';

const Cart = () => {
    return (
        <div className='flex flex-row justify-around '>
            <div className="m-6">
                <img className='h-44 w-full pb-20' src={sell} alt="" />
                <h1 className="text-2xl font-bold pb-6"> Your Shopping Cart</h1>
                <hr />
                <CheckoutProducts></CheckoutProducts>
                <CheckoutProducts></CheckoutProducts>
                <CheckoutProducts></CheckoutProducts>
                <CheckoutProducts></CheckoutProducts>
           </div> 
            <div className="basis-1/4 my-auto bg-gray-200  p-24">
            <h1 className="text-2xl font-bold pb-6"> Your Order Summery</h1>
              <Subtotal></Subtotal>
            </div> 
        </div>
    );
};

export default Cart;