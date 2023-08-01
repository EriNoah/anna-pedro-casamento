import { useEffect, useState } from "react";
import commentService from "../services/comments";
import Comment from "./Comment";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService.list().then((res) => setComments(res)).catch((err) => console.log(err));
  }, [])

  return (
    <div>
      {comments.map((comment) => <div><Comment text={comment.text} author={comment.author}/></div>)}
    </div>
  )
}

export default Comments