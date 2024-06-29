// MenCards.jsx
import { useEffect } from "react";
import { Cards } from "../pages/Cards";
import "../styles/cards.css";
import { useCarousel } from "../redux/custom";

export const BestSeller = () => {
  const { setDisplaySlide } = useCarousel();

  useEffect(() => {
    setDisplaySlide(4);
  });
  return (
    <>
    <div style={{ marginTop: "10vh" }}>
      <Cards
        category="beauty"
        cssClass="mens" 
        customClass="new_arrivals"
        headingOfTheCards={"Best Seller"}
      />
      </div>
    </>
  );
};
