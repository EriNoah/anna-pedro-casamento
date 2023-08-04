import { Label, Textarea, Button } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiMail, HiUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import commentService from "../services/comments";

function CommentForm() {
  const { register, handleSubmit, setError, reset } = useForm({
    mode: "onBlur",
  });

  const onCommentSubmit = async (comment) => {
    try {
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
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit(onCommentSubmit)}>
        <div className="max-w-md" id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Sua mensagem" />
          </div>
          <Textarea
            id="comment"
            placeholder="Escreva sua mensagem..."
            required
            rows={4}
            {...register("text", {
              required: "Text is required",
              minLength: {
                value: 4,
                message: "Text needs at least 4 characters",
              },
            })}
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="nome" value="Seu nome" />
          </div>
          <TextInput
            icon={HiUser}
            id="nome"
            placeholder="Seu nome..."
            required
            type="text"
            {...register("author", {
              required: "Name is required",
              minLength: {
                value: 4,
                message: "User name needs at least 4 characters",
              },
            })}
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Seu email" />
          </div>
          <TextInput
            icon={HiMail}
            id="email4"
            placeholder="nome@email.com"
            required
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "User email must be valid",
              },
            })}
          />
        </div>
        <Button className="w-full mt-6" type="submit" color="light">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default CommentForm;
