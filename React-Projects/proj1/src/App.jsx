import React from "react";
import Nav from "./Nav";
import Btn from "./Components/Button";
function App() {
  return (
    <>
      <div className=" p-2 min-h-screen w-screen  bg-white md:p-4">


        <Nav></Nav>
        <div className="py-8 md:py-28 md:flex md:items-center md:justify-center">
<div className="content md:w-1/3">
  
<h1 className="font-montserrat font-black text-[56px] tracking-tight leading-[3.5rem] md:text-7xl md:tracking-wide">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="py-4 capitalize text-sm tracking-wide w-[90%] md:text-md">
            your feet deserve the best and we're here to help you with our
            shoes.your feet deserve the best and we're here to help you with our
            shoes.
          </p>
          <div className="btns flex gap-8">
            <Btn cnt={"Shop Now"} cs={" bg-red-500 text-white"}></Btn>
            <Btn cnt={"Category"} cs={" border-2 border-black "}></Btn>
          </div>
          <div className="social hidden  md:block md:py-1 text-sm opacity-85">
            <p>Also Avliable On</p>
            <div className="icons md:py-1">
              <img className="py-1 h-8" src="/shops.png" alt="" />
            </div>
          </div>
</div>

          <img className="h-68 py-2 " src="shoe_image.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
