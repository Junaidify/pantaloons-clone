import { useState } from "react";
import "../styles/stylefinder.css";

export const StyleFinder = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div id="style_finder_container">
        <p className="style_finder_img">
          <img
            style={{ width: "100%" }}
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/Stylefinder-D (3)"
            alt=""
          />
        </p>

        <div className="style_finder_content">
          <div className="style_finder_content_finder_content">
            <p
              style={{
                fontSize: "2.5rem",
                fontStyle: "italic",
                letterSpacing: "2px",
              }}
            >
              Style Finder
            </p>
            <p className="style_finder_desc">
              Looking for something specific ? Let's get you there
            </p>
          </div>

          <div className="style_finder_content_slider">
            <div style={{ margin: "0 0 3vh 0" }}>
              <p className="slider_title">Shopping for</p>
              <div className="slider_desc">
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
                <p>Home</p>
              </div>
            </div>

            <div style={{ margin: "0 0 3vh 0" }}>
              <p className="slider_title">Occasion</p>
              <div className="slider_desc">
                <p>Casual Wear</p>
                <p>Work Wear</p>
                <p>Festive</p>
                <p>Party</p>
              </div>
            </div>

            <div style={{ margin: "0 0 3vh 0", width: "80%", marginTop: "5vh" }}>
              <p className="slider_title">Show Me</p>
              <div className="slider-wrapper">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  className="slider"
                  onChange={handleChange}
                />
                <div className="value-label">{value}</div>
              </div>
              <div className="slider-labels">
                <span>Latest</span>
                <span>Most Popular</span>
              </div>

              <p className="slider_btn">SHOW RECOMMENDATIONS</p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
