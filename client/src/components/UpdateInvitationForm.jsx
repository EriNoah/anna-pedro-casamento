import { useForm } from "react-hook-form";
import { Label, Button, TextInput } from "flowbite-react";
import invitationsService from "../services/invitations";
import { useState } from "react";
import { HiMail } from "react-icons/hi";



function UpdateInvitationForm({invitation}) {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
      });

      const onInvitationUpdate = async (data) => {
          const guests = [...invitation.guests]
          const updatedGuests = guests.map((guest) => {
              if (data.hasOwnProperty(guest.id)) {
                  return {
                    _id: guest.id,
                    name: guest.name,
                    confirmed: data[guest.id],
                  };
              }
              return guest;
          })
          const updatedInvitation = {
              ...invitation,
              status: "confirmed",
              guests: updatedGuests
          }

          try {
              await invitationsService.updateInvitation(updatedInvitation, data.email);
              setShowSuccessMessage(true);
          } catch (error) {
              console.log(error);
          }
          
      }

      if (!invitation) {
        return;
      }

      if (showSuccessMessage) {
        return (
          <div className="mt-5 mb-1 block">
            <h1>O convite foi atualizado com sucesso!</h1>
            <h1>Em breve, você receberá um e-mail com a confirmação</h1>
          </div>
        );
      }

    return (
        <form onSubmit={handleSubmit(onInvitationUpdate)}>
            <div className="mt-5 mb-1 block">
                <h1>Please select the names of the people you want to confirm:</h1>
            </div>
            {invitation.guests.map((guest) => (
                <div id={guest.id}>
                    <input type="checkbox"{...register(guest.id)}/>
                    <Label>{guest.name}</Label>
                </div>
            ))}

<div className="max-w-md">
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
            <div className="text-red-400 text-base">
              {errors.email?.message}
            </div>
          )}
        </div>

            <Button className="w-full mt-8" type="submit" color="light">
              Submit
            </Button>
        </form>        
    )
}

export default UpdateInvitationForm;
