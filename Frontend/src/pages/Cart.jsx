import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CART_API } from "../constants/actionTypes";
import "../styles/cart.css";
import img_1 from "../images/img_1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: CART_API.FETCH });
      try {
        const response = await axios.get(
          "https://pantaloons-clone-10.onrender.com/cart"
        );
        dispatch({ type: CART_API.SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: CART_API.ERROR, payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div id="cart_container">
        <div className="cart_cards_wrapper">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="cart_card">
                <p>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    src={img_1}
                    alt=""
                  />
                </p>
                <div className="cart_card_details">
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Mascara
                  </p>
                  <p>Pantaloons Junior</p>
                  <p style={{ fontWeight: "bold" }}> $25</p>
                </div>
                <button
                  className="cart_card_delete"
                  onClick={() =>
                    axios.delete(`http://localhost:3000/cart/${item.id}`)
                  }
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>
      </div>
    </>
  );
};
