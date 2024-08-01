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
  const {
    handleSearch,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  } = useSearchBar();

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

          <div style={{ marginLeft: "5%" }}>
            <Grid templateColumns="repeat(5, 1fr)">
              <Link to="/navbar/mens">
                <GridItem className="navbar_category" w="100%" h="auto">
                  MEN
                </GridItem>
              </Link>
              <Link to="/navbar/women">
                <GridItem className="navbar_category" w="100%" h="auto">
                  WOMEN
                </GridItem>
              </Link>
              <Link to="/navbar/kids">
                <GridItem className="navbar_category" w="100%" h="auto">
                  KIDS
                </GridItem>
              </Link>
              <Link to="/navbar/home">
                <GridItem className="navbar_category" w="100%" h="auto">
                  HOME
                </GridItem>
              </Link>

              <Link to="/navbar/beauty">
                <GridItem className="navbar_category" w="100%" h="auto">
                  BEAUTY
                </GridItem>
              </Link>
            </Grid>
          </div>

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
              style={{
                borderRadius: "10px",
                backgroundColor: "inherit",
                border: "none",
              }}
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

            <GridItem className="navbar_category" w="100%" h="auto">
              <Link to="/navbar/wishlist">
                <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
              </Link>
            </GridItem>
            <GridItem className="navbar_category" w="100%" h="auto">
              <Link to="/navbar/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};
