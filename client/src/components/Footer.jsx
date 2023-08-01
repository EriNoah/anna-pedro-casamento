import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center text-[#636566] gap-4 mb-20">
        <h1 className="border-b-2 text-[60px] w-52 text-center font">A & P</h1>
        <p className="text-xl tracking-wider">21.10.2023 16:50</p>
      </div>
      <div className="flex m-1 gap-3">
        <div className="uppercase text-base mb-3 text-[#636566] tracking-widest border-l-2">
          <i className="fa-solid fa-at me-1"></i>2023 Erica & Alan
        </div>
        <div className="text-[#636566] tracking-wide ">All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
