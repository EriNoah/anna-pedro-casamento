import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex m-1 gap-3">
        <div className="uppercase text-sm md:text-base mb-3 text-[#636566] tracking-widest border-l-2">
          <i className="fa-solid fa-at me-1"></i>2023 Erica & Alan
        </div>
        <div className="text-[#636566] tracking-wide ">All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
