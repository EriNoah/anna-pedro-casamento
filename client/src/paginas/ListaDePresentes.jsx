import React from "react";
import apoiase from "../assets/apoiase.png";
import "./ListaDePresentes.css";
import qrcode from "../assets/pix_annaepedro.png";

function ListaDePresentes() {

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[#636566] tracking-wide text-2xl  font mb-7">
        Ajude-nos a construir nossa casa!
      </h1>
      <div className="mb-10 text-xl w-auto md:w-[800px] text-center px-5">
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
        <h1 className="text-[#636566] tracking-wide text-2xl  font md:mb-7">
          Quer colaborar com nosso sonho?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:w-[800px]">
        <div
              class="p-4 ml-5 mr-5 mt-5 text-center text-xl text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
          <p>Escaneie o código QR e envie-nos um PIX (dependendo do seu banco, poderá ser feito um PIX também com cartão de crédito). ❤️ <br/> <br/> Alternativamente, você pode também nos presentear através da plataforma apoia.se clicando na imagem ao fim da página. Pedimos, no entanto, que o envio por PIX seja priorizado, pois a plataforma apoia.se nos cobra uma taxa de 6% em cada doação. <br/><br/> Agradecemos muito a sua contribuição!</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
              class="rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 p-4 ml-5 mr-5 mt-5 md:ml-0 md:mr-0  text-sm text-center flex flex-col justify-center items-center"
              role="alert"
            >
              <p>PIX</p>
              <img className="w-7/12 h-7/12" src={qrcode} alt="pix qrcode" />
            </div>
            <div
              class="rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 p-4 ml-5 mr-5 mt-5 md:ml-0 md:mr-0 flex flex-col justify-center items-center"
              role="alert"
            >
            <a
              className="flex justify-center"
              href="https://apoia.se/annaepedro"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apoiase} className="w-10/12 md:w-11/12" alt="apoiase img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaDePresentes;
