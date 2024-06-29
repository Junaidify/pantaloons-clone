import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/DashBoard";
import { MensProduct } from "./pages/MensProduct";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/navbar/mens" element={<MensProduct/>} />
        <Route path="/navbar/mens/:id" element={<ProductDetails category={"mens"} />} />
      </Routes>

    </>
  );
}

export default App;
