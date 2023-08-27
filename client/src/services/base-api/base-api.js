import axios from "axios";

const http = axios.create({
  baseURL: "https://www.annaepedro.site/api/v1",
});

export default http;
