import http from "./base-api/base-api";

const create = (comment) => http.post("/comments", comment);
const list = () => http.get("/comments");

const commentService = {
  create,
  list,
};
export default commentService;
