import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import VideoListing from "./pages/VideoListing/videoListing";
import Explore from "./pages/Explore/explore";
import Playlists from "./pages/Playlists/playlists";
import WatchLater from "./pages/WatchLater/watchLater";
import SingleVideo from "./pages/SingleVideo/singleVideo";
import SinglePlaylist from "./pages/SinglePlaylist/singlePlaylist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:categoryName" element={<VideoListing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/video/:ID" element={<SingleVideo />} />
        <Route path="/playlist/:playlistName" element={<SinglePlaylist />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
