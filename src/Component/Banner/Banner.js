import React from "react";
import banner from "../../Asset/banner.jpg";
import Products from "./../Products/Products";

const Banner = () => {
  return (
    <div className="bg-slate-300" >
      <div className="">
        <img src={banner} alt="" />
      </div>
     <div className="lg:p-44">
     <div className="lg:flex  my-20 lg:my-20">
        <Products
        id='12345678900'
        img="https://img.freepik.com/free-psd/helmet-mock-up_1310-159.jpg?w=1380&t=st=1662000228~exp=1662000828~hmac=8e7a543dac3004cf9ba3a7ac1906c95c8c7db553c290e0134b7033597f1191fa"
        name='Samsung Galaxy TV'
        title="Television"
        price={1000}
        status='In Stock'
        ratings ='⭐⭐⭐⭐⭐'
        >
           
        </Products>
        <Products
        id='12345678900'
        img="https://img.freepik.com/free-photo/smart-speaker-house-control-innovative-technology_53876-102350.jpg?t=st=1662000258~exp=1662000858~hmac=c371624f7f4fb2129ffb1c6985aea2c4f72bd87eab1932c157ef487989f59071"
        name='Alexa Digital'
        title="Technology"
        price={400}
        status='In Stock'
        ratings ='⭐⭐⭐⭐⭐'
        ></Products>
      </div>
     
       <div className="lg:flex my-20">
       <Products
        id='12345678900'
        img="https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?w=826&t=st=1662000170~exp=1662000770~hmac=146a19e3796c61463b532c0207fc3ba20845d8377bfbb9f2d9a80ca13776b488"
        name='Rolex 777'
        title="Watch"
        price={2000}
        status='In Stock'
        ratings ='⭐⭐⭐'
        ></Products>
        <Products
        id='12345678900'
        img="https://img.freepik.com/free-vector/drinks-closed-fridges-set_1284-54577.jpg?w=740&t=st=1662002607~exp=1662003207~hmac=07cfb7f428b210b61922f249c2911d6f1c946ae49a457bf0c1c61cb01ba8fd55"
        name='Samsung Coolstep'
        title="Fridge"
        price={6000}
        status='In Stock'
        ratings ='⭐⭐⭐⭐'
        ></Products>
        <Products
        id='12345678900'
        img="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=826&t=st=1662000165~exp=1662000765~hmac=64f03ead3dd3b88da20b79126c90e5abbc829cdba52ab0029323939a4313bd2e"
        name='Sony nano '
        title="Watch"
        price={800}
        status='In Stock'
        ratings ='⭐⭐⭐⭐'
        ></Products>
       </div>
     
    
      <div className="lg:flex  my-20 lg:my-20">
      <Products
        id='12345678900'
        img="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?w=826&t=st=1662002289~exp=1662002889~hmac=7a18c36db299e352e667ef6bbc3e8fc3a061a0e361be9ac9b5caa93887bfc99d"
        name='Boat gear nano7'
        title="Headphone"
        price={200}
        status='In Stock'
        ratings ='⭐⭐⭐'
        ></Products>
      </div>
     </div>
    </div>
  );
};

export default Banner;
