import React, { createContext, useReducer } from "react";
import { videos } from "../data/data";
import { videoReducer } from "../reducers/videoReducer";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialState = {
    videoData: videos,
    search: ""
  };
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
