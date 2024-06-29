// MenCards.jsx
import { useEffect } from "react";
import { Cards } from "../pages/Cards";
import "../styles/cards.css";
import { useCarousel } from "../redux/custom";

export const DealsOfTheDay = () => {
    const {setDisplaySlide} = useCarousel();

    useEffect(() => {
        setDisplaySlide(5);
    })
  return (
    <>
     <div id="deals_of_the_day">
      <Cards category="mens" cssClass="mens" headingOfTheCards={"Deals Of The Day"} />
    </div>
    </>
  );
};
