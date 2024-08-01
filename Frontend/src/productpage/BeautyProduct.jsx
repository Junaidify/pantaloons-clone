import {} from "react";
import { ProductCustomHook } from "./ProductPageParent";
import { Footer } from "../landingPage/Footer";

export const BeautyProduct = () => {
  return (
    <>

      <ProductCustomHook
        category="beauty"
        cssClass="navbar_mens"
        heading_of_product_page="Beauty Products"
      />

      <Footer />
    </>
  );
};
