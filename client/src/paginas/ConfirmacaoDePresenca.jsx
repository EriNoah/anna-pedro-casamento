import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label, Button, Alert } from "flowbite-react";
import { TextInput } from "flowbite-react";
import invitationsService from '../services/invitations';
import UpdateInvitationForm from "../components/UpdateInvitationForm";
import { formatName } from "../utils/utils";

function ConfirmacaoDePresenca() {
  const [invitation, setInvitation] = useState(undefined);
  const [serverError, setServerError] = useState(undefined);
  const [showInvitationSearch, setShowInvitationSearch] = useState(true);
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: "onBlur",
    });

  const onNameSubmit = async (values) => {
    const formattedName = formatName(values.name)

    try {
      setServerError(undefined);
      const res = await invitationsService.getInvitationByName(formattedName);
      setInvitation(res?.data[0])
      reset();
      setShowInvitationSearch(false);
    } catch (error) {
      const errorMessage = error.response.data.message ?? error.message;
      setServerError(errorMessage);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        class="p-4 mx-2 my-10 text-sm text-center md:text-lg text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-blue-400"
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

      {serverError && (
          <Alert color="failure" className="mt-20  h-30">
            <span className="text-center">
              <span className="text-2xl ">Algo deu errado:</span>
              <div className="text-2xl ">{serverError}.</div>
            </span>
          </Alert>
        )}
        {showInvitationSearch && (
          <>
            <h1 className='mt-20'>Por favor, confirme sua presença no formulário a seguir:</h1>
            <form onSubmit={handleSubmit(onNameSubmit)}>
            <div className="max-w-md">
              <div className="mt-5 mb-1 block">
                <Label htmlFor="name" value="Nome da pessoa que está se referindo ao convite" />
              </div>
              <TextInput
                id="name"
                placeholder="Nome da pessoa de referência..."
                required
                type="text"
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O nome precisa de pelo menos 3 caracteres",
                  },
                })}
              />
              {errors.name && (
                <div className="text-red-400 text-base">
                  {errors.name?.message}
                </div>
              )}
            </div>
            <Button className="w-full mt-8" type="submit" color="light">
              Buscar
            </Button>
          </form>
        </>
        )}

        {invitation && (
          <UpdateInvitationForm invitation={invitation} />
        )}
    </div>
  );
}

export default ConfirmacaoDePresenca;
