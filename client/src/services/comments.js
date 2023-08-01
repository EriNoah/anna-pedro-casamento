import http from "./base-api/base-api"

const create = (comment) => http.post("/comments", comment);
const list = () => http.get("/comments");

export default {
  create,
  list
};