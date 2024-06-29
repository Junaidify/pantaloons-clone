import {} from "react";
import { ProductCustomHook } from "../redux/ProductCustomHook";

export const MensProduct = () => {

  return (
    <>
      <ProductCustomHook
        category="mens"
        cssClass="navbar_mens"
        heading_of_product_page="Tops for Women"
      />
    </>
  );
};
