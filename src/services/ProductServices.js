import axios from "axios";
const URL = "https://api-ecommercev2cesar.onrender.com/api/productsEV2";
  // "https://demo-autentificacion-jwt-demoapi2main.onrender.com/api/products";
const CONFIG = {
  headers: {
    "auth-token": localStorage.getItem("token"),
  },
};
  export const obtenerProductosService = async () => {
  const resp = await axios.get(URL, CONFIG);
  // console.log(resp.data);
  return resp.data;
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWNiMThiZmRmZTlkMzY4YjUxMmE5OCIsImlhdCI6MTY2MzU1MTM3NiwiZXhwIjoxNjYzNTY1Nzc2fQ.lXM5Za6ThDQPakECPyBIDV8s7ktaRT03pojFtWZouV4"
// https://api-ecommercev2cesar.onrender.com