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
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
