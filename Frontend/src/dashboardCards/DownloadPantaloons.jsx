import {} from "react";
import "../styles/dashboard.css";
import footer_1 from "../images/footer_1.png";
import footer_2 from "../images/footer_2.png";

export const DownloadPantaloons = () => {
  return (
    <>
      <div className="download_pantaloons_container">
        <div className="download_pantaloons_container_img">
          <p className="download_pantaloons_container_img_parent">
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_1}
              alt=""
            />
          </p>
          <p className="download_pantaloons_container_img_parent">
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_2}
              alt=""
            />
          </p>
        </div>
      </div>
    </>
  );
};
