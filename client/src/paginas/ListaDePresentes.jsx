import React, { useState } from 'react';
import {getHouseImage} from "../utils/houseUtils"

function ListaDePresentes() {
  const [houseState, setHouseState] = useState(0);

  const handleSum = () => {
    setHouseState(houseState + 1);
  };

  const houseImage = getHouseImage(houseState);

  return (
    <div>
      {houseState > 0 && (
        <img src={houseImage} alt={"casa"} />
      )}
        <button onClick={handleSum}>Submit</button>
    </div>
  );
}

export default ListaDePresentes;
