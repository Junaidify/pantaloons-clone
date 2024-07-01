import axios from "axios";
import { useCallback, useState } from "react";

export const useCartCustom = () => {
  const [filters, setFilters] = useState({ size: "" });
  const [category, setCategory] = useState("mens");

  const addToCart = (product, category) => {
    axios.post(`http://localhost:3000/cart`, {
      [category]: product,
    });

    setCategory(category);
  };

  const handleSizeClick = useCallback((size) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      size: size,
    }));
  }, []);

  return {
    addToCart,
    handleSizeClick,
    category,
  };
};
