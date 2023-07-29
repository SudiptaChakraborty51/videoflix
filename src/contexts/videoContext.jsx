import React, { createContext, useReducer } from "react";
import { videos } from "../data/videos";
import { videoReducer } from "../reducers/videoReducer";
import { categories } from "../data/categories";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialState = {
    videoData: videos,
    categoriesData: categories,
    search: "",
    watchLaterVideos: [],
    playlists: [
      {
        src: "https://picsum.photos/300/179",
        name: "Music Videos",
        description: "my personal favourites",
      },
    ],
  };

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  const isInWatchLater = (videoToCheck) =>
    videoState.watchLaterVideos.find(
      (video) => video?._id === videoToCheck?._id
    );

  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, isInWatchLater }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
