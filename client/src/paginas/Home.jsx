import React from "react";
import foto1 from "../assets/foto_home.jpg";

function Home() {
  return (
    <div className="m-10 gap-5 ">
      <div className="flex flex-col justify-center items-center gap-10 mb-10">
        <div className=" w-auto md:w-[800px] flex ">
          <img className="drop-shadow-2xl rounded-lg" src={foto1} alt="foto1" />
        </div>
        <div className="flex flex-col justify-center content-center m-10 gap-24">
          <div className="flex flex-col justify-center content-center tracking-widest uppercase">
            <h1 className="py-5 text-lg md:text-2xl font-bold text-[#636566]  text-center border-b p-7 border-[#636566] ">
              Dia 21 de Outubro de 2023 <br />
              16:50
            </h1>
            <h1 className="py-5 text-lg md:text-2xl font-bold p-7 border-t border-[#636566] text-[#636566] text-center">
              Av. Dr. Marco Paulo Simon Jardim, 857 <br />
              Vila da Serra, Nova Lima - MG <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
