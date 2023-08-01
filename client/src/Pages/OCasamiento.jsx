import React from "react";

function OCasamento() {
  return (
    <div className="flex flex-col justify-center content-center m-10 gap-24">
      <div className="flex justify-center content-center tracking-widest uppercase">
        <h1 className="py-5 text-2xl font-bold text-[#636566]  text-center border-r p-7 border-[#636566] ">
          Outubro 21.23 <br />
          16:50
        </h1>
        <h1 className="py-5 text-2xl font-bold p-7 border-[#636566] text-[#636566] text-center">
          salão de festas <br />
          Esporte fino
        </h1>
      </div>
      <div className="text-center flex flex-col justify-center  ">
        <h1 className="mb-3  text-3xl uppercase font-bold text-[#636566] tracking-widest">
          salão de festas Esporte fino
        </h1>
        <p className="text-2xl mb-3 text-[#636566] font-bold tracking-widest">
          21.10.2023
        </p>
        <p className="text-2xl mb-6 text-[#636566] font-bold tracking-widest">
          16:50
        </p>
        <p className="text-base mb-16 text-[#636566]">
          Dr. Marco Paulo Simon Jardim, 857
        </p>
      </div>
    </div>
  );
}

export default OCasamento;
