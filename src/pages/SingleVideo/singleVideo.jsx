import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import { useParams } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";
import "./singleVideo.css";

const SingleVideo = () => {
  const { ID } = useParams();

  const { videoState } = useContext(VideoContext);

  const selectedVideo = videoState?.videoData?.find(
    ({ _id }) => _id === Number(ID)
  );

  return (
    <div className="single-video">
      <Sidebar />
      <div className="single-video-main">
        <div className="video-content-container">
          <iframe
            src={selectedVideo?.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
          <div>
            <img src="https://picsum.photos/40/40" alt="avatar" />
            <div>
              <strong>{selectedVideo?.title}</strong>
            </div>
          </div>
        </div>
        <div className="more-videos-container"></div>
      </div>
    </div>
  );
};

export default SingleVideo;
