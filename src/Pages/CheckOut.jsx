import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";

const CheckOut = () => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState([]);
useEffect(() => {
  setTotal(cart.reduce((acc, producto) => acc + producto.price, 0));
}, [cart]);
  return (
    <>
      <main className="row cont-posfotter-abajo mt-5 pt-5 pt-5">
        <h3>Carrito </h3>
        <article className="col-md-12">
          <CartList />
        </article>
        <section className="row pt-5">
          <article className="col-md-12">
            <h2>{`El total es : $${total}MXN`}</h2>
          </article>
        </section>
      </main>
    </>
  );
};

export default CheckOut;
