// navbar's  search bar

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("mens");
  const productlist = useSelector((state) => state.fetchData.data);
  const products =
    productlist.length > 0 ? productlist[0][selectedCategory] : [];
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        searchTerm.length > 0 &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    navigate(`/navbar/${selectedCategory}/${filteredProducts[0].id}`);
  };

  return {
    handleSearch,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  };
};
