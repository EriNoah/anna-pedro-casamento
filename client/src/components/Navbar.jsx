import React from "react";
import { Link } from "react-router-dom";
import flores from "../assets/flores.webp";
import CountdownTimer from "./CountdownTimer";

function Navbar() {
  let countDownDate = new Date("Oct 21, 2023 16:50:00").getTime();
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  const weedingDateInMinutes = days * 24 * 60 * 60 * 1000;

  const weedingDay = now + weedingDateInMinutes;

  return (
    <div className=" bg-white text-white flex flex-col  text-center max-w-screen-xl  flex-wrap items-center justify-between mx-auto ">
      <div className="text-center md:relative">
        <img className="sm:block md:w-auto  " src={flores} alt="flores" />
        <a href="/">
          <h1 className="uppercase md:absolute md:top-[73%] md:left-[32%] text-[#636566] tracking-wide text-4xl md:text-[55px] font ">
            Anna & Pedro
          </h1>
        </a>
      </div>

      <h1 className=" mb-5 text-base md:text-xl font-bold text-[#636566] text-center flex justify-center gap-5 tracking-widest">
        21 DE OUTUBRO DE 2023
        <i className="fa-solid fa-circle text-xs self-center "></i>
        NOVA LIMA - MG
      </h1>
      {/* <div className="text-[#636566] mb-10">
        <CountdownTimer targetDate={weedingDay} />
      </div> */}
      <div className="w-full md:block md:w-auto" id="navbar-default">
        <div className="gap-4 tracking-wider font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
          <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa] "
            to="/a-nossa-historia"
          >
            A Nossa Historia
          </Link>
          <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa]"
            to="/o-casamento"
          >
            O Casamento
          </Link>
          <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa]"
            to="/lista-de-presentes"
          >
            Lista de Presentes
          </Link>
          <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa]"
            to="/mensagens"
          >
            Mensagens
          </Link>
          <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa]"
            to="/confirmacao-de-presenca"
          >
            Confirmação de Presença
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
