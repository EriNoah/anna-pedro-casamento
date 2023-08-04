import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";

function Mensagens() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full mb-20 mt-6">
      <div className="flex flex-col">
        <Comments />
        <div className="self-center w-96">
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default Mensagens;
