import axios from "axios";

const http = axios.create({
  baseURL: "https://anna-pedro-d505b9d011fd.herokuapp.com/api/v1",
});

export default http;
