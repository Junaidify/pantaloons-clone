import axios from "axios";
import { useEffect } from "react";
import { WISHLIST_API } from "../constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import "../styles/productpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const Wishlist = ({ cssClass, wishCategory }) => {
  const dispatch = useDispatch();
  const wishlistCards = useSelector((state) => state.wishlistReducer.data);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: WISHLIST_API.FETCH });

      try {
        const res = await axios.get("http://localhost:3000/wishlist");
        dispatch({ type: WISHLIST_API.SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: WISHLIST_API.ERROR, payload: err });
      }
    };

    getData();
  }, [dispatch]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://pantaloons-clone-10.onrender.com/wishlist/${itemId}`);
      dispatch({ type: WISHLIST_API.DELETE, payload: itemId });
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  return (
    <div>
      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "5vh 0",
          fontStyle: "italic",
        }}
      >
        My Wishlist
      </p>
      <div
        className={`${cssClass}_parent_of_cards ${cssClass}_wishlist_cards_container`}
      >
        {wishlistCards &&
          Object.entries(wishlistCards).map(([category, items]) =>
            items.map((item) => (
              <div key={item.id} className={`${cssClass}_cards`}>
                <p className={`${cssClass}_cards_img_parent`}>
                  <img
                    className="cards_img"
                    src={item[wishCategory]?.image}
                    alt={item.title}
                  />
                </p>
                <h3>{item.title}</h3>
                <p style={{ fontSize: "1.2rem", margin: "1vh 0.5vw" }}>
                  {item[wishCategory]?.brand}
                </p>
                <div
                  style={{ margin: "1vh 0.5vw" }}
                  className="wishlist_card_features"
                >
                  {item[wishCategory]?.features?.material}&nbsp;
                  {item[wishCategory]?.features?.size}&nbsp;
                  {item[wishCategory]?.features?.color}&nbsp;
                  {item[wishCategory]?.features?.fit}&nbsp;
                  {item[wishCategory]?.features?.sleeve_type}&nbsp;
                </div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    margin: "1vh 0.5vw 0 0.5vw",
                  }}
                >
                  ${item[wishCategory]?.price}{" "}
                  <strong style={{ marginLeft: "1vw", fontStyle: "italic" }}>
                    30% OFF
                  </strong>
                </p>

                <p
                  className="wishlist_card_remove_btn"
                  onClick={() => handleDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </p>
              </div>
            ))
          )}
      </div>
    </div>
  );
};
