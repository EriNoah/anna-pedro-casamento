import React from "react";

function OCasamento() {
  return (
    <div className="flex flex-col justify-center content-center ">
      <div className="gap-5 ">
        <div className="flex flex-col justify-center items-center gap-10 mb-10">
          <div className="flex flex-col justify-center content-center m-10 gap-24">
            <div className="flex flex-col justify-center content-center tracking-widest ">
              <h1 className="py-5 text-lg md:text-2xl font-bold text-[#636566]  text-center border-b p-7 border-[#636566] ">
                Dia 21 de Outubro de 2023 <br />
                16:50
              </h1>
              <h1 className="py-5 text-lg md:text-2xl font-bold p-7 border-t border-[#636566] text-[#636566] text-center">
                Av. Dr. Marco Paulo Simon Jardim, 857 <br />
                Salão de Festas <br />
                Vila da Serra, Nova Lima - MG <br />
              </h1>
              <h3 className="mt-4 text-base md:text-lg border-[#636566] text-[#636566] text-center">
                Dress Code: Esporte Fino
              </h3>
              <div>
                <iframe
                  className="my-7 rounded-lg border md:w-[600px] md:h-[250px]"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2310375069213!2d-43.926694354278496!3d-19.971177808082537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698155db46fdf%3A0x4cc83f2954becc1f!2sAv.%20Dr.%20Marco%20Paulo%20Simon%20Jardim%2C%20857%20-%20Jardim%20da%20Torre%2C%20Nova%20Lima%20-%20MG%2C%2034000-000%2C%20Brazil!5e0!3m2!1sen!2ses!4v1692296732131!5m2!1sen!2ses"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OCasamento;
