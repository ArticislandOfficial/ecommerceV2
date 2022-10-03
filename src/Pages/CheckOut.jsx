import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";
// import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

const CheckOut = () => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState([]);
useEffect(() => {
  setTotal(cart.reduce((acc, producto) => acc + producto.price, 0));
}, [cart]);
  return (
    <>
      <main className="row cont-posfotter-abajo pt-5 mt-5">
        <h1 className="">Carito de compras </h1>
        <article className="col-md-6">
          <CartList />
          {cart.length > 0 ? (
            <>
              <section className="col-md-6">
                <article className="col-md-6">
                  <h2>{`El total es : $${total} MXN`}</h2>
                </article>
              </section>
              <section className="row">
                {/* <article className="col">
                  <PaypalCheckoutButton
                    currency={"MXN"}
                    amount={total}
                    showSpinner={false}
                  />
                </article> */}
              </section>
            </>
          ) : (
            <section className="row">
              <article className="col-md-12">
                <h2>No hay productos en el carrito</h2>
              </article>
            </section>
          )}
        </article>
      </main>
    </>
  );
};

export default CheckOut;
