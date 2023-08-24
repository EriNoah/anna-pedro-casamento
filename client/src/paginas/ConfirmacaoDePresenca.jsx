import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmacaoDePresenca() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
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
      <div
        class="p-4 mx-2 my-5 text-sm text-center md:text-lg text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <i className="fa-solid fa-wrench mx-2" style={{ color: "#24703f" }} />
        Em breve, você poderá confirmar sua presença aqui! Pedimos um pouco mais
        de paciência
      </div>

      <Link
        to="/lista-de-presentes"
        class="mb-5 mx-2 inline-flex items-center justify-center p-5 text-sm text-center md:text-lg font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span class="w-full">
          Você pode acessar a nossa lista de presentes clicando aqui
        </span>
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ConfirmacaoDePresenca;
