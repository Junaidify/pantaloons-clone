import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_REQUEST } from "../constants/actionTypes";
import axios from "axios";

export const FetchData = () => {
  const dispatch = useDispatch();
  const mens = useSelector((state) => state.fetchData.data);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: API_REQUEST.FETCH });

      try {
        const res = await axios.get("http://localhost:3000/products");
        dispatch({ type: API_REQUEST.SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: API_REQUEST.ERROR, payload: err });
      }
    };
    getData();
  }, []);


  return (
    <>
   
    </>
  );
};
