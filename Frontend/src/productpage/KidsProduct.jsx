import {} from "react";
import { ProductCustomHook } from "./ProductPageParent";
import { Footer } from "../landingPage/Footer";

export const KidsProduct = () => {
  return (
    <>
      <ProductCustomHook
        category="kids"
        cssClass="navbar_mens"
        heading_of_product_page="Tops for kids"
      />

      <Footer />
    </>
  );
};
