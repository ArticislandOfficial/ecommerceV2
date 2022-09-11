import axios from "axios";
// le mandamos parametro form que es el que va recibir como tipo req.body cuando lo importemos
//  en nuestra pagina de iniciar Sesion y es mas sencillo que utilizar fetch porque te hace la conversion del archivo tipo json

export const loginService = async (form)=>{
    const resp =await axios.post(
      "https://api-ecommercev2cesar.onrender.com/api/auth/login",form
    );
    return resp.data
}