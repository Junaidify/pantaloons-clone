import {} from "react";
import "../styles/dashboard.css";
import { Navbar } from "./Navbar";
import { FetchData } from "../redux/FetchData";
import { DealsOfTheDay } from "./DealsOfTheDay";
import { Wishlist } from "./Wishlist";
import { MensProduct } from "./MensProduct";

export const DashBoard = () => {
  return (
    <div id="dashboard">
      <Navbar />
      <FetchData />
      <DealsOfTheDay />
      <MensProduct/>
      <Wishlist category={"mens"} cssClass={"navbar_mens"} wishCategory={"mens"} />
    </div>
  );
};
