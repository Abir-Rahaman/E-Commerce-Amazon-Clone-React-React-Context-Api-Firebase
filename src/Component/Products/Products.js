import React from 'react';

const Products = ({img,name,title,price,ratings,status}) => {
    return (
        <div className="mx-auto gap-36 shadow-2xl  pb-9">
            <img className="lg:w-80" src={img} alt="" />
               <div className="text-center">
               <p className="text-xl font-bold pt-4">{name}</p>
                <p className="text-gray-400 font-bold">{title}</p>
                <p className="text-2xl text-orange-500 font-bold">${price}</p>
                <small className="text-green-400">{status}</small>
                <p className=" text-orange-500">{ratings}</p>
                <button className="text-white font-bold px-4 py-2 bg-orange-500 mt-4" >Add To Cart</button>
               </div>
        </div>
    );
};

export default Products;