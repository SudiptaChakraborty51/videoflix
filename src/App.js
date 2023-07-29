import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import VideoListing from "./pages/VideoListing/videoListing";
import Explore from "./pages/Explore/explore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:categoryName" element={<VideoListing />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
