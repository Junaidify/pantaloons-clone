import { useCallback, useEffect, useMemo, useState } from "react";
import { useCarousel } from "./custom";
import "../styles/productpage.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import img_1 from "../images/img_1.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProductCustomHook = ({
  category,
  cssClass,
  heading_of_product_page,
}) => {
  const product = useSelector((state) => state.fetchData.data);
  const products = product.length > 0 ? product[0][category] : [];
  const [filters, setFilters] = useState({
    brand: false,
    price: false,
    rating: false,
    material: "",
    color: "",
    size: "",
  });

  console.log(products && products[0]);

  const { setDisplaySlide, currentSlide } = useCarousel();
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { name, type, checked, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSizeClick = useCallback((size) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      size: size,
    }));
  }, []);

  const applyFilters = useCallback(() => {
    let filteredProducts = [...products];

    if (filters.brand) {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.brand.localeCompare(b.brand)
      );
    }

    if (filters.material) {
      filteredProducts = filteredProducts.filter((product) =>
        product.features.material
          .toLowerCase()
          .includes(filters.material.toLowerCase())
      );
    }

    if (filters.color) {
      filteredProducts = filteredProducts.filter((product) =>
        product.features.color
          .toLowerCase()
          .includes(filters.color.toLowerCase())
      );
    }

    if (filters.size) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.features.size.toLowerCase() === filters.size.toLowerCase()
      );
    }

    if (filters.price) {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (filters.rating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= 4
      );
    }

    return filteredProducts;
  }, [filters, products]);

  const sortedProducts = useMemo(() => applyFilters(), [applyFilters]);

  const handleHeartClick = (productId) => {
    const item = products.find((item) => item.id === productId);

    if (!item) {
      console.error("Product not found in products array.");
      return;
    }

    const wishlistItem = {
      id: item.id,
      title: item.title,
      features: item.features,
      brand: item.brand,
      price: item.price,
      image: item.image,
    };

    console.log("Adding to wishlist:", wishlistItem);

    axios
      .post(`http://localhost:3000/wishlist`, {
        [category]: wishlistItem,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setDisplaySlide(20);
  }, [setDisplaySlide]);

  return (
    <div id="product_page_container">
      <div className="parent_of_checkbox">
        <p className="heading_of_product_checkbox">FILTER BY:</p>
        <div>
          <input
            onChange={handleChange}
            name="brand"
            className="product_page_checkbox"
            type="checkbox"
            id="content"
          />
          <label className="product_page_checkbox_content" htmlFor="content">
            Brand
          </label>
        </div>
        <div>
          <input
            onChange={handleChange}
            name="price"
            className="product_page_checkbox"
            type="checkbox"
          />
          <label className="product_page_checkbox_content" htmlFor="price">
            Price
          </label>
        </div>
        <div>
          <input
            onChange={handleChange}
            name="rating"
            className="product_page_checkbox"
            type="checkbox"
          />
          <label className="product_page_checkbox_content" htmlFor="rating">
            Best Seller
          </label>
        </div>
        <div>
          <input
            onChange={handleChange}
            name="material"
            className="product_page_checkbox  product_page_input_filter"
            type="text"
            placeholder="Enter material"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="color"
            className="product_page_checkbox  product_page_input_filter"
            type="text"
            placeholder="Enter color"
          />
        </div>
      </div>

      <div>
        <div className="navbar_mens_parent_of_cards_of_sizes">
          <p className="navbar_mens_product_heading">
            {heading_of_product_page}
          </p>
          {(category !== "home" && category !== "beauty") && (
            <>
              <p className="navbar_mens_size_cards_title">SHOP BY SIZE</p>
              <div className="navbar_mens_size_cards">
                <p onClick={() => handleSizeClick("XS")}>XS</p>
                <p onClick={() => handleSizeClick("S")}>S</p>
                <p onClick={() => handleSizeClick("M")}>M</p>
                <p onClick={() => handleSizeClick("L")}>L</p>
                <p onClick={() => handleSizeClick("XL")}>XL</p>
                <p onClick={() => handleSizeClick("XXL")}>XXL</p>
                <p onClick={() => handleSizeClick("2XL")}>2XL</p>
              </div>
            </>
          )}
        </div>
        <div className="navbar_mens_all_cards_components">
          <div className={`${cssClass}_parent_of_cards`} ref={currentSlide}>
            {sortedProducts &&
              sortedProducts.map((item) => (
                <div
                  key={item.id}
                  className={`${cssClass}_cards`}
                  onClick={() => {
                    navigate(`/navbar/${category}/${item.id}`);
                  }}
                >
                  <p className={`${cssClass}_cards_img_parent`}>
                    <img className="cards_img" src={item.image} alt={item.title} />
                  </p>
                  <p className={`${cssClass}_cards_brand`}>{item.brand}</p>
                  <div className={`${cssClass}_cards_features`}>
                    {item.features.material}&nbsp;
                    {item.features.fit}&nbsp;
                    {item.features.size}&nbsp;
                    {item.features.color}&nbsp;
                    {item.features.sleeve_type}
                  </div>

                  <p className={`${cssClass}_cards_price`}>
                    ${item.price}&nbsp;{" "}
                    <span style={{ marginLeft: "1vw", fontStyle: "italic" }}>
                      30% OFF
                    </span>
                  </p>
                  <p
                    className={`${cssClass}_cards_heart`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeartClick(item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
