import React, { useContext } from "react";
import "./home.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { videoState } = useContext(VideoContext);
  const navigate = useNavigate();

  return (
    <div className="home">
      <Sidebar />
      <div className="home-main">
        <h2>Categories</h2>
        <div className="categories-container">
          {videoState?.categoriesData?.map((category) => (
            <div
              key={category?._id}
              className="category-card"
              onClick={() => navigate(`/videos/${category?.category}`)}
            >
              <img src={category?.thumbnail} alt={category?.category} />
              <h4>{category?.category}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
