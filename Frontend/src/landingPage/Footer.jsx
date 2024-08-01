import "../styles/footer.css";
import footer_1 from "../images/footer_1.png";
import footer_2 from "../images/footer_2.png";
import footer_3 from "../images/footer_3.png";
import footer_4 from "../images/footer_4.png";
import footer_5 from "../images/footer_5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faIntercom,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {} from "react";
import {
  faArrowRotateLeft,
  faHeadset,
  faIndianRupee,
  faTruck,
  faWallet,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <div id="footer_container_parent">
        <div id="footer_container_1">
          <div className="footer_container_1_heading">
            <p>GET AHEAD OF THE STYLE CURVE</p>
            <p>SUBSCRIBE TO THE FASHION NEWSLETTER</p>
          </div>

          <div className="footer_container_1_input">
            <p>
              <input
                style={{
                  padding: "2vh 2vw",
                  width: "100%",
                  border: "none",
                  fontSize: "0.8rem",
                }}
                type="text"
                placeholder="YOUR EMAIL ADDRESS"
              />
            </p>
            <p style={{ color: "#00cccc", fontWeight: "bold" }}>JOIN</p>
          </div>

          <div className="footer_container_1_icons">
            <p>
              <FontAwesomeIcon icon={faFacebook} />
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} />
            </p>
            <p>
              <FontAwesomeIcon icon={faX} />
            </p>
            <p>
              <FontAwesomeIcon icon={faYoutube} />
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} />
            </p>
          </div>
        </div>

        <div id="footer_container_2_parent">
          <div id="footer_container_2">
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faArrowRotateLeft} />
              </p>{" "}
              <p className="footer_container_2_heading">EASY RETURNS</p>
            </div>
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faHeadset} />
              </p>{" "}
              <p className="footer_container_2_heading">1800-180-1800</p>
            </div>
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faTruck} />
              </p>{" "}
              <p className="footer_container_2_heading">FREE SHIPPING</p>
            </div>
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faIndianRupee} />
              </p>{" "}
              <p className="footer_container_2_heading">CASH ON DELIVERY</p>
            </div>
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faWallet} />
              </p>{" "}
              <p className="footer_container_2_heading">SECURE MONEY</p>
            </div>
            <div>
              <p className="footer_container_2_icons">
                <FontAwesomeIcon icon={faIntercom} />
              </p>{" "}
              <p className="footer_container_2_heading">FREE ALTERATIONS</p>
            </div>
          </div>
        </div>

        <div id="footer_container_3">
          <div>
            <p className="footer_container_3_heading">WOMEN</p>
            <p>Westernwear</p>
            <p>Ethnicwear</p>
            <p>Sports & Activewear</p>
            <p>Sleepwear & Lingerie</p>
            <p>Sleepwear & Lingerie</p>
            <p>Bags,Wallets & Clutches</p>
            <p>Bags,Wallets & Clutches</p>
            <p>Footwear</p>
            <p>Accessories</p>
            <p>Shop By Occasion</p>
            <p>Shop By Brand</p>
          </div>

          <div>
            <p className="footer_container_3_heading">MEN</p>
            <p>Top Wear</p>
            <p>Ethnic Wear</p>
            <p>Accessories</p>
            <p>Sport And Activewear</p>
            <p>Footwear</p>
            <p>Innerwear And Sleepwear</p>
            <p>Bags And Backpacks</p>
            <p>Shop By Occasion</p>
            <p>Shop By Brand</p>
          </div>

          <div>
            <p className="footer_container_3_heading">KIDS</p>
            <p>Boys Topwear</p>
            <p>Girls Bootomwear</p>
            <p>Girls Topwear</p>
            <p>Boys Bootomwear</p>
            <p>Boys Innerwear & Sleepwear</p>
            <p>Girls Innerwear & Sleepwear</p>
            <p>Baby Innerwear & Sleepwear</p>
            <p>Girls Bags & Backpacks</p>
            <p>Baby Footwear</p>
            <p>Boys Bags & Backpacks</p>
            <p>Baby Topwear</p>
            <p>Babies Accessories</p>
            <p>Girls Footwear</p>
            <p>Boys Footwear</p>
            <p>Boys Accessories</p>
            <p>Girls Accessories</p>
            <p>Shop By Occasion</p>
            <p>Shop By Brands</p>
            <p>Shop By Brand</p>
          </div>

          <div>
            <p className="footer_container_3_heading">HOME</p>
            <p>Bath</p>
            <p>Bed</p>
            <p>Kitchenware</p>
            <p>Shop by Product</p>
            <p>Shop by Brand</p>
          </div>

          <div>
            <p className="footer_container_3_heading">BRANDS</p>
          </div>

          <div>
            <p className="footer_container_3_heading">BEAUTY</p>
            <p>Makeup</p>
            <p>Mens Fragrances</p>
            <p>Women Fragrances</p>
            <p>Shop By Brand</p>
          </div>

          <div>
            <p className="footer_container_3_heading">ABOUT</p>
            <p>About us</p>
            <p>Greencard</p>
            <p>Store Locator</p>
            <p>Payment Options</p>
            <p>Investor Relations</p>
          </div>

          <div>
            <p className="footer_container_3_heading">CUSTOMER</p>
            <p>Track Order</p>
            <p>FAQ</p>
            <p>Customer Support</p>
            <p>Return & Exchange Policy</p>
            <p>Shipping Policy</p>
          </div>
        </div>

        <div id="footer_container_4">
          <p>EXPERIENCE PANTALOONS APP</p>
          <p className="footer_container_4_img">
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_2}
              alt="App store img"
            />
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_1}
              alt="play store img"
            />
          </p>
        </div>
        <hr />

        <div id="footer_container_5">
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <p>
            Copy Right Aditya Birla Fashion & Reatail Limited. All right
            Reserved
          </p>

          <p className="footer_container_5_img">
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_3}
              alt="payment options"
            />
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_4}
              alt="payment options"
            />
            <img
              style={{ width: "100%", height: "100%" }}
              src={footer_5}
              alt="payment options"
            />
          </p>
        </div>
      </div>
    </>
  );
};
