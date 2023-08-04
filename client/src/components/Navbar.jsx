import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/AnnaPedro.png";
import flores from "../assets/flores.webp";
import CountdownTimer from "./CountdownTimer";

function Navbar() {
  let countDownDate = new Date("Oct 23, 2023 16:50:00").getTime();
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  const weedingDateInMinutes = days * 24 * 60 * 60 * 1000;

  const weedingDay = now + weedingDateInMinutes;

  return (
    <div className=" bg-white text-white flex flex-col  text-center max-w-screen-xl  flex-wrap items-center justify-between mx-auto p-4">
      <img
        className="hidden sm:block md:w-auto sm:text-center "
        src={flores}
        alt="flores"
      />
      <a href="/">
        <h1 className="uppercase tracking-wide text-[55px] font text-[#636566]">
          Anna & Pedro
        </h1>
      </a>

      <h1 className="py-4 mb-5 text-xl font-bold text-[#636566] text-center flex justify-center gap-5 tracking-widest">
        OUTUBRO 21, 2023{" "}
        <i className="fa-solid fa-circle text-xs self-center "></i> SALÃO
        ESPORTE FINO
      </h1>
      <div className="text-[#636566] tracking-widest m-3">
        <CountdownTimer targetDate={weedingDay} />
      </div>
      <div classNeme="hidden w-full md:block md:w-auto" id="navbar-default">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
