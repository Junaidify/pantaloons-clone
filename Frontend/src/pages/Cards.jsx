// Cards.jsx
import { useSelector } from "react-redux";
import "../styles/cards.css";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLandingPageProductCarousel } from "../hooks/landingPageProductCarousel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Cards = ({
  category,
  cssClass,
  headingOfTheCards,
  customClass,
}) => {
  const { currentSlide, handleNextSlide, handlePrevSlide } =
    useLandingPageProductCarousel();
  const cards = useSelector((state) => state.fetchData.data);
  const navigate = useNavigate();

  const handleWishlist = (productId) => {
    const item = cards.find((item) => item.id === productId);

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
      .post(`https://pantaloons-clone-10.onrender.com/wishlist`, {
        [category]: wishlistItem,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    navigate(`/navbar/${category}/${item.id}`);
  };

  return (
    <div id={`${cssClass}_cards_container`}>
      <p className={`${cssClass}_cards_title  ${customClass}_cards_title `}>
        {headingOfTheCards}
      </p>
      <div className={`${cssClass}_cards_wrapper`}>
        <div className={`${cssClass}_parent_of_cards`} ref={currentSlide}>
          {cards &&
            cards.map((item) => (
              <div
                key={item.id}
                onClick={() => handleWishlist(item.id)}
                className={`${cssClass}_cards  ${customClass}_cards`}
              >
                <p className={`${cssClass}_cards_img_parent`}>
                  <img
                    className="cards_img "
                    id={`${customClass}_cards_img`}
                    src={item.image}
                    alt={item.title}
                  />
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
                <p className={`${cssClass}_cards_heart`}>
                  <FontAwesomeIcon icon={faHeart} />
                </p>
              </div>
            ))}
        </div>
        <button
          onClick={handlePrevSlide}
          className={`${cssClass}_cards_prev_btn`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={handleNextSlide}
          className={`${cssClass}_cards_next_btn`}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};
