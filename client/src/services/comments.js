import http from "./base-api/base-api";

const create = (comment) =>
  http.post("/comments", comment, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
const list = () =>
  http.get("/comments", {
    headers: { "Access-Control-Allow-Origin": "*" },
  });

const commentService = {
  create,
  list,
};
export default commentService;
