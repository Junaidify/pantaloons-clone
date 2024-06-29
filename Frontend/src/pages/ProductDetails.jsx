import "../styles/productdetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import img_1 from "../images/img_1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";

// eslint-disable-next-line react/prop-types
export const ProductDetails = ({ category }) => {
  const { id } = useParams();
  const product = useSelector((state) => state.fetchData.data);
  const products = product.length > 0 ? product[0][category] : [];
  const [filters, setFilters] = useState({ size: "" });
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = useCallback((size) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      size: size,
    }));
  }, []);

  return (
    <div id="product_details_page">
      {products.map((product) => {
        if (product.id === id) {
          return (
            <div key={product.id} id="product_details_page_container">
              <div className="product_details_img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={img_1}
                  alt="Product"
                />
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={img_1}
                  alt="Product"
                />
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={img_1}
                  alt="Product"
                />
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={img_1}
                  alt="Product"
                />
              </div>
              <div>
                <p className="product_details_brand">{product.brand}</p>
                <div className="product_details_features">
                  <p>{product.features.material}</p>
                  <p>{product.features.fit}</p>
                  <p>{product.features.size}</p>
                  <p>{product.features.color}</p>
                  <p>{product.features.sleeve_type}</p>
                </div>
                <p className="product_details_first_one">
                  <strong style={{ color: "yellow" }}>
                    <FontAwesomeIcon icon={faStar} />
                  </strong>{" "}
                  Be the first one to rate
                </p>
                <p className="product_details_price">${product.price}</p>

                <div>
                  <p className="navbar_mens_size_cards_title product_details_size_heading">
                    SELECT SIZE
                  </p>
                  <div className="navbar_mens_size_cards">
                    <p onClick={() => handleSizeClick("XS")}>XS</p>
                    <p
                      onClick={() => handleSizeClick("S")}
                      style={{ backgroundColor: "transparent", color: "black" }}
                    >
                      S
                    </p>
                    <p onClick={() => handleSizeClick("M")}>M</p>
                    <p onClick={() => handleSizeClick("L")}>L</p>
                    <p onClick={() => handleSizeClick("XL")}>XL</p>
                    <p onClick={() => handleSizeClick("XXL")}>XXL</p>
                    <p onClick={() => handleSizeClick("2XL")}>2XL</p>
                  </div>
                </div>

                <div className="product_details_quantity">
                  <p>QUANTITY</p>
                  <div className="product_details_quantity_counter">
                    <p
                      onClick={() => {
                        quantity > 1 && setQuantity((prev) => prev - 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </p>
                    <p>{quantity}</p>
                    <p onClick={() => setQuantity((prev) => prev + 1)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </p>
                  </div>
                </div>
                <hr />

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1vw 0"}}>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <p>
                      <FontAwesomeIcon icon={faTruck} />
                    </p>
                    <div style={{fontSize: "0.9rem", marginLeft: "1vw"}}>
                      <p>Enter your pincode for</p>
                      <p style={{fontWeight: "bold"}}>estimated delivery timelines</p>
                    </div>
                  </div>
                  <p style={{color: "green"}}><input style={{width: "7vw", padding: "0.5vh 0.5vw", borderRadius: "5px", border: "none", outline: "0.2px solid black"}} type="number" placeholder="Pincode" /></p>
                </div>
                <hr  />

                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", margin: "1vw 0"}}>
                  <p style={{padding: "2vh 3vw", border: "1px solid black", fontSize: "0.9rem", borderRadius: "30px"}}>ADD TO WISHLIST</p>
                  <p style={{padding: "2vh 4vw", border: "1px solid black", fontSize: "0.9rem", borderRadius: "30px", backgroundColor: "#00FFFF", color: "white"}}>ADD TO BAG</p>
                </div>

                <p>{product.rating}</p>
                <p>{product.title}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
