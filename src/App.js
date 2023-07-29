import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import VideoListing from "./pages/VideoListing/videoListing";
import Explore from "./pages/Explore/explore";
import Playlists from "./pages/Playlists/playlists";
import WatchLater from "./pages/WatchLater/watchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:categoryName" element={<VideoListing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}

export default App;
