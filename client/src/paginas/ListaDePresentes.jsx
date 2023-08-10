import React, { useState } from 'react';
import { useEffect } from 'react';
import houseConstructionService from '../services/houseConstruction';
import {getHouseImage} from "../utils/houseUtils"

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

  const handleClick = () => {
    try {
      houseConstructionService.addPiece({
        soldPieces: 10,
        remainingPieces: 100,
        totalPieces: 100,
      });
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      {houseState.soldPieces > 0 && (
        <img src={getHouseImage(houseState.soldPieces)} alt={"casa"} />
      )}
        <button onClick={handleClick}>Submit</button>
        <h1>Ajude-nos a construir nossa casa!</h1>
    </div>
  );
}

export default ListaDePresentes;
