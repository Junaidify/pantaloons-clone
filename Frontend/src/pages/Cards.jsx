// Cards.jsx
import { useSelector } from "react-redux";
import "../styles/cards.css";
import img_1 from "../images/img_1.webp";
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCarousel } from "../redux/custom";

// eslint-disable-next-line react/prop-types
export const Cards = ({ category, cssClass, headingOfTheCards }) => {
  const { currentSlide, handleNextSlide, handlePrevSlide } = useCarousel();
  const data = useSelector((state) => state.fetchData.data);
  const cards = data.length > 0 ? data[0][category] : [];

  // console.log(`${category} cards:`, cards);

  return (
    <div id={`${cssClass}_cards_container`}>
      <p className={`${cssClass}_cards_title`}>{headingOfTheCards}</p>
      <div className={`${cssClass}_cards_wrapper`}>
        <div className={`${cssClass}_parent_of_cards`} ref={currentSlide}>
          {cards &&
            cards.map((item) => (
              <div key={item.id} className={`${cssClass}_cards`}>
                <p className={`${cssClass}_cards_img_parent`}>
                  <img className="cards_img" src={img_1} alt={item.title} />
                </p>
                <p className={`${cssClass}_cards_brand`}>{item.brand}</p>
                <div className={`${cssClass}_cards_features`}>
                  {item.features.material}&nbsp;
                  {item.features.fit}&nbsp;
                  {item.features.size}&nbsp;
                  {item.features.color}&nbsp;
                  {item.features.sleeve_type}
                </div>
                <p className={`${cssClass}_cards_price`}>${item.price}&nbsp; <span style={{marginLeft: "1vw", fontStyle: "italic"}}>30% OFF</span></p>
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
