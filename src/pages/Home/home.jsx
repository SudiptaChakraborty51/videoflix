import React, { useContext } from "react";
import "./home.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";

const Home = () => {
  const { videoState } = useContext(VideoContext);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-main">
        <h2>Categories</h2>
        <div className="categories-container">
          {videoState?.videoData?.map((video) => (
            <div key={video?._id} className="category-card">
              <img src={video?.thumbnail} alt={video?.category} />
              <h4>{video?.category}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
