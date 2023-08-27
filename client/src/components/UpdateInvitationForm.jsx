import { useForm } from "react-hook-form";
import { Label, Button, TextInput, Alert } from "flowbite-react";
import invitationsService from "../services/invitations";
import { useState } from "react";
import { Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";

function UpdateInvitationForm({ invitation }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onInvitationUpdate = async (data) => {
    const guests = [...invitation.guests];
    const updatedGuests = guests.map((guest) => {
      if (data.hasOwnProperty(guest.id)) {
        return {
          _id: guest.id,
          name: guest.name,
          confirmed: data[guest.id],
        };
      }
      return guest;
    });
    const updatedInvitation = {
      ...invitation,
      status: "confirmed",
      guests: updatedGuests,
    };

    try {
      await invitationsService.updateInvitation(updatedInvitation, data.email);
      setShowSuccessMessage(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!invitation) {
    return;
  }

  if (showSuccessMessage) {
    return (
      <div className="mt-5 mb-1 block">
        <Alert
          color="success"
          className="mx-2 my-5 text-sm text-center md:text-lg text-green-800 rounded-lg dark:bg-gray-800 dark:text-blue-400"
        >
          <i className="fa-solid fa-check mx-2 " style={{ color: "#208a1e" }} />
          <span>
            O convite foi atualizado com sucesso! Em breve, você receberá um
            e-mail com a confirmação
          </span>
        </Alert>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onInvitationUpdate)}>
      <div className="py-3 text-lg font-bold border-[#636566] text-[#636566] text-center">
        <h1>Selecione os nomes das pessoas que você deseja confirmar:</h1>
      </div>

      <div className="my-5 mx-5">
        {invitation.guests.map((guest) => (
          <div id={guest.id}>
            <Checkbox
              className="text-green-800"
              type="checkbox"
              {...register(guest.id)}
            />
            <Label className="mx-3">{guest.name}</Label>
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-5">
        <div className="mt-5 mb-2 block">
          <Label htmlFor="email4" value="Seu email" />
        </div>
        <TextInput
          icon={HiMail}
          id="email4"
          placeholder="nome@email.com"
          required
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "O email do usuário deve ser válido",
            },
          })}
        />
        {errors.email && (
          <div className="text-red-400 text-base">{errors.email?.message}</div>
        )}
      </div>
      <Button className="w-full mt-8 " type="submit" color="light">
        Enviar
      </Button>
    </form>
  );
}

export default UpdateInvitationForm;
