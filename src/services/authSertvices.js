import axios from "axios";
// le mandamos parametro form que es el que va recibir como tipo req.body cuando lo importemos
//  en nuestra pagina de iniciar Sesion y es mas sencillo que utilizar fetch porque te hace la conversion del archivo tipo json
const URL_ROOT = "https://api-ecommercev2cesar.onrender.com/api/auth";
const CONFIG = {
  headers: {
    "auth-token": localStorage.getItem("token"),
  },
};


export const loginService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);
  return resp.data;
};
export const signupSerivce = async (form) => {
  const resp = await axios.post(`${URL_ROOT}`, form);

  return resp.data;
};
export const verifyingTokenSerivce = async () => {
  const resp = await axios.get(`${URL_ROOT}`, CONFIG);

  return resp.data;
};