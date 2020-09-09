import {
  UPDATE_WATCH_BANDS,
  UPDATE_WATCH_FACES,
  UPDATE_WATCH_WARRANTIES,
} from './watch-type';

// dispatch function
export const updateWatchBandsRedux = (bands) => {
  // console.log('pass dispatcher: updateWatchBandsRedux')
  return {
    type: UPDATE_WATCH_BANDS,
    data: bands,
  };
};

export const updateWatchFacesRedux = (faces) => {
  // console.log('pass dispatcher: updateWatchFacesRedux')
  return {
    type: UPDATE_WATCH_FACES,
    data: faces,
  };
};

export const updateWatchWarrantiesRedux = (warranties) => {
  // console.log('pass dispatcher: updateWatchWarrantiesRedux')
  return {
    type: UPDATE_WATCH_WARRANTIES,
    data: warranties,
  };
};
