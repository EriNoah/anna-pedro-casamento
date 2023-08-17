import React, { useState } from 'react';
import { useEffect } from 'react';
import houseConstructionService from '../services/houseConstruction';
import {getHouseImage} from "../utils/houseUtils"
import apoiase from "../assets/apoiase.png"


function ListaDePresentes() {
  const [houseState, setHouseState] = useState({});

  useEffect(() => {
    const getData = async () => {
      await houseConstructionService
      .getPieces()
      .then((res) => setHouseState(res.data[0]))
      .catch((err) => console.log(err));
    }
    if(Object.keys(houseState.length === 0)) {
      getData()
    }
  
  }, [houseState.length]);

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="py-5 text-2xl font-bold border-[#636566] text-[#636566] text-center">
        Ajude-nos a construir nossa casa!
      </h1>
      <div className="text-sm mb-3 md:text-base">
        Oi, pessoal,
        Como sabem, nós moramos juntos há um tempinho, mas sempre tivemos o desejo de festejar com vocês o nosso encontro e nossa alegria em partilhar a vida.
        Nesse percurso, alguns de vocês participaram intensamente dessa construção e realização do desejo de morarmos juntos. Tudo começou com nossa ida para São João del Rei durante a pandemia, e permanecemos nesse propósito firmes e fortes. Foi um belo estágio para reafirmamos nosso amor e vontade de seguirmos juntos.
        Hoje, temos tudo que precisamos para nossa casinha. E como só falta ela, a maravilhosa casinha, rsrs... Pensamos em deixar como sugestão de presentes que contribuam para que realizemos esse lindo sonho.
        Somos muito gratos pelo amor e carinho de vocês, e esperamos poder nos divertir muito nesse dia tão especial.
        Amamos vocês, 
        Anna e Pedro
      </div>
      {houseState.soldPieces > 0 && (
        <img className='w-5/12' src={getHouseImage(houseState.soldPieces)} alt={"casa"} />
      )}
      <div>
        Wanna colaborate with our dream?
        Please click in the image to be redirect to our apoia.se's page! 
      </div>
      <a href="https://apoia.se/annaepedro" target="_blank" rel="noreferrer"><img src={apoiase} className="w-4/12" alt='apoiase img'/></a>
    </div>
  );
}

export default ListaDePresentes;
