import { Label, Textarea, Button, Alert } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import commentService from "../services/comments";
import { useState } from "react";

function CommentForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const [serverError, setServerError] = useState(undefined);

  const onCommentSubmit = async (comment) => {
    try {
      setServerError(undefined);
      console.debug("Registering...");
      console.log(comment);
      comment = await commentService.create(comment);
      reset();
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        console.error(error.message, errors);
        Object.keys(errors).forEach((inputName) =>
          setError(inputName, { message: errors[inputName] })
        );
      } else {
        setServerError(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit(onCommentSubmit)}>
        {serverError && (
          <Alert color="failure" className="mt-20  h-30">
            <span className="text-center">
              <span className="text-2xl ">Info alert!</span>{" "}
              <div className="text-2xl ">{serverError}.</div>
            </span>
          </Alert>
        )}
        <div className="max-w-md" id="textarea">
        <h1 className="py-5 text-2xl font-bold border-[#636566] text-[#636566] text-center">
            Deixe sua mensagem para o casal
          </h1>
          <div className="mb-1 block">
            <Label htmlFor="comment" value="Sua mensagem" />
          </div>
          <Textarea
            id="comment"
            placeholder="Escreva sua mensagem..."
            required
            rows={4}
            {...register("text", {
              required: "O mensagem do comentário é obrigatório",
              minLength: {
                value: 4,
                message: "O mensagem precisa de pelo menos 4 caracteres",
              },
            })}
          />
          {errors.text && (
            <div className="text-red-400  text-base">
              {errors.text?.message}
            </div>
          )}
        </div>
        <div className="max-w-md">
          <div className="mt-5 mb-1 block">
            <Label htmlFor="nome" value="Seu nome" />
          </div>
          <TextInput
            icon={HiUser}
            id="nome"
            placeholder="Seu nome..."
            required
            type="text"
            {...register("author", {
              required: "Nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome precisa de pelo menos 3 caracteres",
              },
            })}
          />
          {errors.author && (
            <div className="text-red-400 text-base">
              {errors.author?.message}
            </div>
          )}
        </div>
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
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;
