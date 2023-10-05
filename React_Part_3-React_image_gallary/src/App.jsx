import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import ImageInfo from "./pages/ImageInfo/ImageInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/imageinfo" element={<ImageInfo />} />
    </Routes>
  );
}

export default App;
