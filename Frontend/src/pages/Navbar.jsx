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
import img_logo_2 from "../images/img_logo_2.png";
import img_1 from "../images/carousal/img_1.avif";
import img_2 from "../images/carousal/img_1.avif";
import img_3 from "../images/carousal/img_3.avif";
import img_4 from "../images/carousal/img_4.avif";
import img_5 from "../images/carousal/img_5.avif";

export const Navbar = () => {
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
      <div id="navbar">
        <Box boxSize="sm" width="100%" height="8vh">
          <Image
         mixBlendMode={"darken"}
            w="100%"
            h="100%"
            src={img_logo_2}
            alt="Logo"
          />
        </Box>

        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem  className="navbar_category" w="100%" h="auto" bg="blue.500">
            MEN
          </GridItem>
          <GridItem  className="navbar_category" w="100%" h="auto" bg="blue.500">
            WOMEN
          </GridItem>
          <GridItem  className="navbar_category" w="100%" h="auto" bg="blue.500">
            KIDS
          </GridItem>
          <GridItem className="navbar_category" w="100%" h="auto" bg="blue.500">
            HOME
          </GridItem>
          <GridItem className="navbar_category" w="100%" h="auto" bg="blue.500">
            BRANDS
          </GridItem>
          <GridItem  className="navbar_category" w="100%" h="auto" bg="blue.500">
            BEAUTY
          </GridItem>
        </Grid>

        <Grid
          w="100%"
          h="auto"
          bg="blue.500"
          className="navbar_search_parent"
          gridTemplateColumns="80% 20%"
          gap={4}
        >
          <input className="navbar_search" type="text" placeholder="Search" />
          <FontAwesomeIcon
            className="navbar_search_icon"
            icon={faMagnifyingGlass}
          />
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem className="navbar_category" w="100%" h="auto" bg="blue.500">
            <FontAwesomeIcon icon={faUser} />
          </GridItem>
          <GridItem className="navbar_category" w="100%" h="auto" bg="blue.500">
            <FontAwesomeIcon icon={faHeart} />
          </GridItem>
          <GridItem className="navbar_category" w="100%" h="auto" bg="blue.500">
            <FontAwesomeIcon icon={faCartShopping} />
          </GridItem>
        </Grid>
      </div>
      </div>

      <div id="carousal_container">
        <div className="carousal" ref={currentSlide}>
          <div className="carousal_img_parent">
            <img className="carousal_img" src={img_5} alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src={img_2} alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src={img_3} alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src={img_4} alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src={img_1} alt="" />
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
