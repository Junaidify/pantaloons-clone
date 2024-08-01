import {} from "react";
import "../styles/dashboard.css";
import { useFetchdata } from "../hooks/fetchData";
import { DealsOfTheDay } from "./DealsOfTheDay";
import { NewArrivals } from "./NewArrivals";
import { TrendingNow } from "./TrendingNow";
import { BestSeller } from "./BestSeller";
import { StyleFinder } from "./StyleFinder";
import { ImgContainer } from "./ImgContainer";
import { DownloadPantaloons } from "./DownloadPantaloons";
import { Carousal } from "./Carousal";
import { Footer } from "./Footer";

export const LandingPageComponent = () => {
  const data = useFetchdata();
  return (
    <>
      <div id="dashboard">
        {data}
        <useFetchdata />
        <Carousal />
        <DealsOfTheDay />
        <NewArrivals />
        <TrendingNow />
        <StyleFinder />
        <BestSeller />
        <ImgContainer />
        <DownloadPantaloons />
        <Footer />
      </div>
    </>
  );
};
