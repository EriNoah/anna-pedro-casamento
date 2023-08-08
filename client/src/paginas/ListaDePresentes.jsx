import React, { useState } from 'react';
import houseConstructionService from '../services/houseConstruction';
import {getHouseImage} from "../utils/houseUtils"

function ListaDePresentes() {
  const [houseState, setHouseState] = useState(0);
  const houseImage = getHouseImage(houseState);

  const handleClick = () => {
    try {
      houseConstructionService.addPiece({
        soldPieces: 0,
        remainingPieces: 100,
        totalPieces: 100,
      });
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      {houseState > 0 && (
        <img src={houseImage} alt={"casa"} />
      )}
        <button onClick={handleClick}>Submit</button>
        <h1>Ajude-nos a construir nossa casa!</h1>
    </div>
  );
}

export default ListaDePresentes;
