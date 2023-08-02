import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:8190/api/v1",
});
