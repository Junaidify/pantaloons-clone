import {} from "react";
import { ProductCustomHook } from "../redux/ProductCustomHook";
import { Footer } from "../pages/Footer";


export const KidsProduct = () => {

  return (
    <>
      <ProductCustomHook
        category="kids"
        cssClass="navbar_mens"
        heading_of_product_page="Tops for kids"
      />

      <Footer/>
    </>
  );
};
