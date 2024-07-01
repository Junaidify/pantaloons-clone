import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import "../styles/navbar.css";
// import img_logo_2 from "../images/img_logo_2.png";
import img_1 from "../images/carousal/img_1.avif";
import img_2 from "../images/carousal/img_1.avif";
import img_3 from "../images/carousal/img_3.avif";
import img_4 from "../images/carousal/img_4.avif";
import img_5 from "../images/carousal/img_5.avif";
import { Link } from "react-router-dom";

export const Carousal = () => {
  const currentSlide = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (currentSlide.current) {
      const slideWidth =
        currentSlide.current.clientWidth / currentSlide.current.children.length;
      currentSlide.current.style.transform = `translateX(-${
        activeSlide * slideWidth
      }px)`;
      currentSlide.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeSlide]);

  const handleNextSlide = () => {
    activeSlide < currentSlide.current.children.length - 1 &&
      setActiveSlide((prev) =>
        prev === currentSlide.current.children.length - 1 ? 0 : prev + 1
      );
  };

  const handlePrevSlide = () => {
    activeSlide > 0 &&
      setActiveSlide((prev) =>
        prev === 0 ? currentSlide.current.children.length - 1 : prev - 1
      );
  };

  return (
    <>
      <div id="carousal_container">
        <div className="carousal" ref={currentSlide}>
          <div className="carousal_img_parent">
            <img
              className="carousal_img"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/REVISED20240626_EOSS_homepage banners_offer_D?wid=1300&fit=wrap"
              alt=""
            />
          </div>
          <div className="carousal_img_parent">
            <img
              className="carousal_img"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Shirt Story_homepage_D?wid=1300&fit=wrap"
              alt=""
            />
          </div>
          <div className="carousal_img_parent">
            <img
              className="carousal_img"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240606-Join The Casual Club-homepage-D?wid=1300&fit=wrap"
              alt=""
            />
          </div>
          <div className="carousal_img_parent">
            <img
              className="carousal_img"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Shirt Story_homepage_D?wid=1300&fit=wrap"
              alt=""
            />
          </div>
          <div className="carousal_img_parent">
            <img
              className="carousal_img"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Teerrific For Kids_homepage_D?wid=1300&fit=wrap"
              alt=""
            />
          </div>
        </div>
        {activeSlide > 0 && (
          <button onClick={handlePrevSlide} className="carousal_btn_prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        )}
        <button onClick={handleNextSlide} className="carousal_btn_next">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
};
