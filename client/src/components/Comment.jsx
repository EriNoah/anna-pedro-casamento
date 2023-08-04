import "./comment.css";

function Comment({ text, author }) {
  return (
    <div className="mb-10">
      <div className="quote">
        <span className="left">❝</span>
        <blockquote>{text}</blockquote>
        <small>{author}</small>
        <span className="right">❞</span>
      </div>
    </div>
  );
}

export default Comment;
