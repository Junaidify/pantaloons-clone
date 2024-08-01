import {} from "react";
import { ProductCustomHook } from "./ProductPageParent";
import { Footer } from "../landingPage/Footer";

export const MensProduct = () => {
  return (
    <>
      <ProductCustomHook
        category="mens"
        cssClass="navbar_mens"
        heading_of_product_page="Tops for Men"
      />

      <Footer />
    </>
  );
};
