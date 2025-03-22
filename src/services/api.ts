import axios from "axios";

const url = "http://localhost:8080/api/v1/";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
