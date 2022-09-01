import React from 'react';

const CheckoutProducts = () => {
    return (
        
              <div className="flex gap-8 mt-8">
                <div className="w-44">
                <img className='' src="https://img.freepik.com/free-psd/helmet-mock-up_1310-159.jpg?w=1380&t=st=1662000228~exp=1662000828~hmac=8e7a543dac3004cf9ba3a7ac1906c95c8c7db553c290e0134b7033597f1191fa" alt="" />
                
                </div>
                <div className="">
                <p className=" font-bold">Samsung Galaxy TV</p>
                <p className=" font-bold "> price=1000</p>
                <p className=" font-bold"> ⭐⭐⭐⭐⭐</p>
                <button className="text-white font-bold px-4 py-2 bg-orange-500 mt-4" >Remove From Cart</button>
                </div>
               </div>
       
    );
};

export default CheckoutProducts;