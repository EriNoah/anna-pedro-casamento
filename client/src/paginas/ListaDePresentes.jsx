import React, { useState } from "react";
import { useEffect } from "react";
import houseConstructionService from "../services/houseConstruction";
import { getHouseImage } from "../utils/houseUtils";
import apoiase from "../assets/apoiase.png";
import "./ListaDePresentes.css";

function ListaDePresentes() {
  const [houseState, setHouseState] = useState({});

  useEffect(() => {
    const getData = async () => {
      await houseConstructionService
        .getPieces()
        .then((res) => setHouseState(res.data[0]))
        .catch((err) => console.log(err));
    };
    if (Object.keys(houseState.length === 0)) {
      getData();
    }
  }, [houseState.length]);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[#636566] tracking-wide text-2xl md:text-[25px]  font mb-7">
        Ajude-nos a construir nossa casa!
      </h1>
      <div className="text-sm mb-20 md:text-base w-auto md:w-[800px] text-center px-5">
        Oi, pessoal, <br /> <br />
        Como sabem, nós moramos juntos há um tempinho, mas sempre tivemos o
        desejo de festejar com vocês o nosso encontro e nossa alegria em
        partilhar a vida. <br /> <br /> Nesse percurso, alguns de vocês
        participaram intensamente dessa construção e realização do desejo de
        morarmos juntos. Tudo começou com nossa ida para São João del Rei
        durante a pandemia, e permanecemos nesse propósito firmes e fortes. Foi
        um belo estágio para reafirmamos nosso amor e vontade de seguirmos
        juntos. <br /> <br /> Hoje, temos tudo que precisamos para nossa
        casinha. E como só falta ela, a maravilhosa casinha, rsrs... Pensamos em
        deixar como sugestão de presentes que contribuam para que realizemos
        esse lindo sonho. <br />
        <br /> Somos muito gratos pelo amor e carinho de vocês, e esperamos
        poder nos divertir muito nesse dia tão especial. Amamos vocês Anna e
        Pedro
      </div>
      <div
        div
        className="w-[340px] h-[306px] md:w-[680px] md:h-[612px] flex justify-start mx-2 background"
      >
        <div className="self-end">
          {houseState.soldPieces > 0 && houseState.soldPieces <= 10 && (
            <img
              className="max-h-[42px] md:max-h-full"
              src={getHouseImage(houseState.soldPieces)}
              alt={"casa"}
            />
          )}
          {houseState.soldPieces > 10 && (
            <img
              className="md:max-h-full"
              src={getHouseImage(houseState.soldPieces)}
              alt={"casa"}
            />
          )}
        </div>
      </div>
      <div className="text-[#636566] tracking-wide text-sm md:text-[20px] text-center font my-7">
        Quer colaborar com nosso sonho? Clique na imagem para ser redirecionado
        para a página do apoia.se!
      </div>
      <a
        className="flex justify-center"
        href="https://apoia.se/annaepedro"
        target="_blank"
        rel="noreferrer"
      >
        <img src={apoiase} className="w-6/12" alt="apoiase img" />
      </a>
    </div>
  );
}

export default ListaDePresentes;
