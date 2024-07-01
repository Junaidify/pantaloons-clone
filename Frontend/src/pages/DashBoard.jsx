import {} from "react";
import "../styles/dashboard.css";
import { Navbar } from "./Navbar";
import { FetchData } from "../redux/FetchData";
import { DealsOfTheDay } from "../dashboardCards/DealsOfTheDay";
import { NewArrivals } from "../dashboardCards/NewArrivals";
import { TrendingNow } from "../dashboardCards/TrendingNow";
import { BestSeller } from "../dashboardCards/BestSeller";
import { StyleFinder } from "../dashboardCards/StyleFinder";
import { ImgContainer } from "../dashboardCards/ImgContainer";
import { DownloadPantaloons } from "../dashboardCards/DownloadPantaloons";
import { Carousal } from "./Carousal";
import { Footer } from "./Footer";

export const DashBoard = () => {
  return (
    <>
      <div id="dashboard">
        <FetchData /> {/* important to render the server */}
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
