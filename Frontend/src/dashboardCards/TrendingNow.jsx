// MenCards.jsx
import { useEffect } from "react";
import { Cards } from "../pages/Cards";
import "../styles/cards.css";
import { useCarousel } from "../redux/custom";

export const TrendingNow = () => {
  const { setDisplaySlide } = useCarousel();

  useEffect(() => {
    setDisplaySlide(4);
  });
  return (
    <>
    <div style={{ marginTop: "10vh" }}>
      <Cards
        category="kids"
        cssClass="mens" 
        customClass="new_arrivals"
        headingOfTheCards={"Trending Now"}
      />
      </div>
    </>
  );
};
