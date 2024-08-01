import {} from "react";
import { ProductCustomHook } from "./ProductPageParent";
import { Footer } from "../landingPage/Footer";

export const HomeProduct = () => {
  return (
    <>
      <ProductCustomHook
        category="home"
        cssClass="navbar_mens"
        heading_of_product_page="Home"
      />

      <Footer />
    </>
  );
};
