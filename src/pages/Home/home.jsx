import React, { useContext } from "react";
import "./home.css";
import Sidebar from "../../components/Sidebar/sidebar";
import { VideoContext } from "../../contexts/videoContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { videoState } = useContext(VideoContext);

  const categoryArr = videoState?.videoData?.reduce(
    (acc, { category }) => (!acc.includes(category) ? [...acc, category] : acc),
    []
  );

  const navigate = useNavigate();

  return (
    <div className="home">
      <Sidebar />
      <div className="home-main">
        <h2>Categories</h2>
        <div className="categories-container">
          {categoryArr?.map((category) => (
            <div
              key={category}
              className="category-card"
              onClick={() => navigate(`/videos/${category}`)}
            >
              <img
                src={`https://source.unsplash.com/random/800x800/?${category}`}
                alt={category}
              />
              <h4>{category}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
