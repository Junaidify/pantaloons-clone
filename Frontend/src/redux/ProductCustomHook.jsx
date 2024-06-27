import { useEffect } from "react";
import { Cards } from "../pages/Cards";
import { useCarousel } from "./custom";
import "../styles/productpage.css";

export const ProductCustomHook = ({ category }) => {
  const { setDisplaySlide } = useCarousel();

  useEffect(() => {
    setDisplaySlide(20);
  }, [category, setDisplaySlide]);

  return (
    <>
      <div id="product_page_container">
        <div className="parent_of_checkbox">
          <p className="heading_of_product_checkbox">FILTER BY:</p>
          <div>
            <input
              className="product_page_checkbox"
              type="checkbox"
              id="content"
            />
            <label className="product_page_checkbox_content" htmlFor="content">
              Brand
            </label>
          </div>
          <div>
            <input className="product_page_checkbox" type="checkbox" />
            <label className="product_page_checkbox_content" htmlFor="">
              Material
            </label>
          </div>
          <div>
            <input className="product_page_checkbox" type="checkbox" />
            <label className="product_page_checkbox_content" htmlFor="">
              Color
            </label>
          </div>
          <div>
            <input className="product_page_checkbox" type="checkbox" />
            <label className="product_page_checkbox_content" htmlFor="">
              Price
            </label>
          </div>

          <div>
            <input className="product_page_checkbox" type="checkbox" />
            <label className="product_page_checkbox_content" htmlFor="">
              Best Seller
            </label>
          </div>
        </div>

        <div>
          <div className="navbar_mens_parent_of_cards_of_sizes">
            <p className="navbar_mens_product_heading">Tops For Women</p>
            <p className="navbar_mens_size_cards_title">SHOP BY SIZE</p>
            <div className="navbar_mens_size_cards">
              <p>XS</p>
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
              <p>2XL</p>
            </div>
          </div>
          <div className="navbar_mens_all_cards_components">
            <Cards
              category={"mens"}
              cssClass={"navbar_mens"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
