import {} from "react";
import { ProductCustomHook } from "../redux/ProductCustomHook";
import { Footer } from "../pages/Footer";


export const HomeProduct = () => {

  return (
    <>
      <ProductCustomHook
        category="home"
        cssClass="navbar_mens"
        heading_of_product_page="Home"
      />

      <Footer/>
    </>
  );
};
