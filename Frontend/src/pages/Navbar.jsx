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
import { useSearchBar } from "../redux/searchbar";

export const Navbar = () => {
  const currentSlide = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const {
    handleSearch,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  } = useSearchBar();

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
          <Box boxSize="sm" width="90%" height="8vh">
            <Link className="link_comp" to="/">
              <Image
                w="100%"
                h="100%"
                src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
                alt="Logo"
              />
            </Link>
          </Box>

          <Grid templateColumns="repeat(6, 1fr)">
            <Link to="/navbar/mens">
              <GridItem
                className="navbar_category"
                w="100%"
                h="auto"
                bg="blue.500"
              >
                MEN
              </GridItem>
            </Link>
            <Link to="/navbar/women">
              <GridItem
                className="navbar_category"
                w="100%"
                h="auto"
                bg="blue.500"
              >
                WOMEN
              </GridItem>
            </Link>
            <Link to="/navbar/kids">
              <GridItem
                className="navbar_category"
                w="100%"
                h="auto"
                bg="blue.500"
              >
                KIDS
              </GridItem>
            </Link>
            <Link to="/navbar/home">
              <GridItem
                className="navbar_category"
                w="100%"
                h="auto"
                bg="blue.500"
              >
                HOME
              </GridItem>
            </Link>
            <GridItem
              className="navbar_category"
              w="100%"
              h="auto"
              bg="blue.500"
            >
              BRANDS
            </GridItem>
            <Link to="/navbar/beauty">
              <GridItem
                className="navbar_category"
                w="100%"
                h="auto"
                bg="blue.500"
              >
                BEAUTY
              </GridItem>
            </Link>
          </Grid>

          <Grid
       
            bg="blue.500"
            className="navbar_search_parent"
            gridTemplateColumns="60% 25% 15%"
            gap={3}
          >
            <input
              className="navbar_search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              className="navbar_search_category"
              style={{borderRadius: "10px",backgroundColor: "inherit", border: "none"}}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="mens">Mens</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
            </select>
            <p className="navbar_search_icon" onClick={handleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
          </Grid>

          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem
              className="navbar_category"
              w="100%"
              h="auto"
              bg="blue.500"
            >
              <FontAwesomeIcon icon={faUser} />
            </GridItem>

            <GridItem
              className="navbar_category"
              w="100%"
              h="auto"
              bg="blue.500"
            >
              <Link to="/navbar/wishlist">
                <FontAwesomeIcon icon={faHeart} style={{ color: "white" }}  />
              </Link>
            </GridItem>
            <GridItem
              className="navbar_category"
              w="100%"
              h="auto"
              bg="blue.500"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </GridItem>
          </Grid>
        </div>
      </div>

      <div id="carousal_container">
        <div className="carousal" ref={currentSlide}>
          <div className="carousal_img_parent">
            <img className="carousal_img" src="https://s7ap1.scene7.com/is/image/adityabirlafashion/REVISED20240626_EOSS_homepage banners_offer_D?wid=1300&fit=wrap" alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Shirt Story_homepage_D?wid=1300&fit=wrap"   alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240606-Join The Casual Club-homepage-D?wid=1300&fit=wrap" alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img"  src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Shirt Story_homepage_D?wid=1300&fit=wrap" alt="" />
          </div>
          <div className="carousal_img_parent">
            <img className="carousal_img" src="https://s7ap1.scene7.com/is/image/adityabirlafashion/20240620_Teerrific For Kids_homepage_D?wid=1300&fit=wrap" alt="" />
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

