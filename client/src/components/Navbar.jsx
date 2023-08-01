import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/AnnaPedro.png";
import flores from "../assets/flores.webp";
import CountdownTimer from "./CountdownTimer";

function Navbar() {
  const weedingDateInMinutes = 86 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const weedingDay = NOW_IN_MS + weedingDateInMinutes;

  return (
    <div className="h-65 bg-white text-white flex flex-col justify-center items-center text-center">
      <img className="h-80 text-center" src={flores} alt="flores" />
      <a href="/">
        {/* <img className="h-56" src={logo} alt="annaPedro" /> */}
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
      <div className="flex gap-14 tracking-wider">
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
  );
}

export default Navbar;
