import { useEffect, useState } from "react";
import commentService from "../services/comments";
import Comment from "./Comment";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService
      .list()
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap gap-14 m-10 justify-center ">
      {comments.map((comment) => {
        if (comment.confirm) {
          return (
            <div key={comment.id}>
              <Comment text={comment.text} author={comment.author} />
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
}

export default Comments;
