import {} from "react";
import { ProductCustomHook } from "../redux/ProductCustomHook";
import { Footer } from "../pages/Footer";

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
