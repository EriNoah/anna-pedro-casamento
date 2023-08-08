import http from "./base-api/base-api";

const addPiece = (data) =>
  http.post("/house-construction", data, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
const getPieces = () =>
  http.get("/house-construction", {
    headers: { "Access-Control-Allow-Origin": "*" },
  });

const houseConstructionService = {
  addPiece,
  getPieces,
};
export default houseConstructionService;
