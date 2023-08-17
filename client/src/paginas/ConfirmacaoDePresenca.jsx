import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ConfirmacaoDePresenca() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <iframe 
          title="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2310375069213!2d-43.926694354278496!3d-19.971177808082537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa698155db46fdf%3A0x4cc83f2954becc1f!2sAv.%20Dr.%20Marco%20Paulo%20Simon%20Jardim%2C%20857%20-%20Jardim%20da%20Torre%2C%20Nova%20Lima%20-%20MG%2C%2034000-000%2C%20Brazil!5e0!3m2!1sen!2ses!4v1692296732131!5m2!1sen!2ses" 
          width="300" 
          height="250" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
      <h1>Você pode acessar a nossa lista de presentes <Link
            className="text-base text-[#636566] hover:underline focus:underline decoration-[#9ba5aa]"
            to="/lista-de-presentes"
          >
            clicando aqui
          </Link></h1>
        <h1>Em breve, você poderá confirmar sua presença aqui! Pedimos um pouco mais de paciência</h1>
    </div>
  );
}

export default ConfirmacaoDePresenca
