import React from "react";
// import { useEffect } from "react";
// import houseConstructionService from "../services/houseConstruction";
// import { getHouseImage } from "../utils/houseUtils";
import apoiase from "../assets/apoiase.png";
import "./ListaDePresentes.css";
import qrcode from "../assets/pix_annaepedro.png";

function ListaDePresentes() {
  // const [houseState, setHouseState] = useState({});

  // useEffect(() => {
  //   const getData = async () => {
  //     await houseConstructionService
  //       .getPieces()
  //       .then((res) => setHouseState(res.data[0]))
  //       .catch((err) => console.log(err));
  //   };
  //   if (Object.keys(houseState.length === 0)) {
  //     getData();
  //   }
  // }, [houseState.length]);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[#636566] tracking-wide text-2xl md:text-[25px]  font mb-7">
        Ajude-nos a construir nossa casa!
      </h1>
      <div className="text-sm mb-10 md:text-base w-auto md:w-[800px] text-center px-5">
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
      <div className="flex justify-center items-start">
        <i
          className="fa-solid fa-house-chimney-window mx-5 scale-150 mt-2"
          style={{ color: "#24703f" }}
        />
        <h1 className="text-[#636566] tracking-wide text-2xl md:text-[25px]  font md:mb-7">
          Quer colaborar com nosso sonho?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:w-[800px]">
        <div
              class="p-4 ml-5 mr-5 mt-5 text-sm text-center md:text-lg text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
          <p>Escaneie o código QR e envie-nos um PIX (dependendo do seu banco, poderá ser feito um PIX também com cartão de crédito). ❤️ <br/> <br/> Alternativamente, você pode também nos presentear através da plataforma apoia.se clicando na imagem ao fim da página. Pedimos, no entanto, que o envio por PIX seja priorizado, pois a plataforma apoia.se nos cobra uma taxa de 6% em cada doação. <br/><br/> Agradecemos muito a sua contribuição!</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
              class="rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 p-4 ml-5 mr-5 mt-5 md:ml-1 md:mr-1  text-sm text-center flex flex-col justify-center items-center"
              role="alert"
            >
              <p>PIX</p>
              <img className="w-7/12 h-7/12" src={qrcode} alt="pix qrcode" />
            </div>
            <div
              class="rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 p-4 ml-5 mr-5 mt-5 md:ml-1 md:mr-1 flex flex-col justify-center items-center"
              role="alert"
            >
            <a
              className="flex justify-center"
              href="https://apoia.se/annaepedro"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apoiase} className="w-10/12" alt="apoiase img" />
            </a>
          </div>
        </div>
      </div>
      {/* <div
        div
        className="ml-10 mt-20 w-[340px] h-[306px] md:w-[680px] md:h-[612px] flex justify-start mx-2 background"
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
      </div> */}
    </div>
  );
}

export default ListaDePresentes;
