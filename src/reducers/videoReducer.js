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
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.id
            ? {
                ...video,
                notes: video?.notes
                  ? [...video?.notes, payload?.text]
                  : [payload?.text],
              }
            : video
        ),
      };
    case "EDIT_NOTE":
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.videoId
            ? {
                ...video,
                notes: video?.notes?.map((note) =>
                  note?.id === payload?.id ? payload?.text : note
                ),
              }
            : video
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.videoId
            ? {
                ...video,
                notes: video?.notes?.filter((note) => note?.id !== payload?.id),
              }
            : video
        ),
      };
    default:
      return state;
  }
};
