import axios from "axios";

const http = axios.create({
  // baseURL: "https://www.annaepedro.site/api/v1",
  baseURL: "http://localhost:5005/api/v1",
});

export default http;
