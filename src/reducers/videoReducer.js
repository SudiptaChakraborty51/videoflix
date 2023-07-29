export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, search: payload };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [payload, ...state.watchLaterVideos],
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video?._id !== payload?._id
        ),
      };
    case "ADD_PLAYLIST":
      return { ...state, playlists: [payload, ...state?.playlists] };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) =>
            playlist?.name.toLowerCase().trim() !== payload.toLowerCase().trim()
        ),
      };
    case "ADD_NOTE":
      const updatedVideoData = state?.videoData?.map((video) => {
        if (video?._id === payload?.id) {
          const updatedNote = video?.notes
            ? [payload?.text, ...video?.notes]
            : [payload?.text];
          return { ...video, notes: updatedNote };
        }
        return video;
      });
      return { ...state, videoData: updatedVideoData };
    default:
      return state;
  }
};
