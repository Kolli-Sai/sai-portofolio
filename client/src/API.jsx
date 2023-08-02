import axios from "axios";

export const Api = axios.create({
  baseURL: "https://portofolio-k4kt.onrender.com/api/v1",
});
