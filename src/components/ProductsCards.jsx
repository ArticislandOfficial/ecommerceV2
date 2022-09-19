
import { NavLink } from "react-router-dom";
import Cards from "../components/Cards";

const ProductsCards = () => {


  return (
    <>
      <div className="row justify-content-evenly">
        <Cards
          class="col-md-3 "
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 1"
          text="20 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 2"
          text="50 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 3"
          text="80 USD"
          href=""
          textButton="Ver Producto"
        />
      </div>
      <div className="row justify-content-evenly">
        <Cards
          class="col-md-3 "
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 4"
          text="24 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 2"
          text="35 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 3"
          text="75 USD"
          href=""
          textButton="Ver Producto"
        />
      </div>
      <div className="row justify-content-evenly">
        <Cards
          class="col-md-3 "
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 1"
          text="200 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 2"
          text="500 USD"
          href=""
          textButton="Ver Producto"
        />

        <Cards
          class="col-md-3"
          src="https://picsum.photos/1080"
          alt="imagen1"
          Cardtitle="Producto 3"
          text="800 USD"
          href=""
          textButton="Ver Producto"
        />
      </div>
      <section></section>
     
    </>
  );
}

export default ProductsCards