import {} from "react";
import { ProductCustomHook } from "./ProductPageParent";
import { Footer } from "../landingPage/Footer";

export const WomenProduct = () => {
  return (
    <>
      <ProductCustomHook
        category="women"
        cssClass="navbar_mens"
        heading_of_product_page="Tops for Women"
      />

      <Footer />
    </>
  );
};
