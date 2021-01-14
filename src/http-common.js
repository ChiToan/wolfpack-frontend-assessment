import axios from "axios";

export default axios.create({
  baseURL: "https://join.wolfpackit.nl/api/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer 9bAqXRPplyiGfF6n81NVUGpAqeLI1QHw46aqICVL1BLaGI6",
  },
});
