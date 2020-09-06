import {
  UPDATE_WATCH_BANDS,
  UPDATE_WATCH_FACES,
  UPDATE_WATCH_WARRANTIES,
} from './watch-type';

// dispatch function
export const updateWatchBandsRedux = (bands) => {
  return {
    type: UPDATE_WATCH_BANDS,
    data: bands,
  };
};

export const updateWatchFacesRedux = (faces) => {
  console.log('pass updateFacesToStore')
  return {
    type: UPDATE_WATCH_FACES,
    data: faces,
  };
};

export const updateWatchWarrantiesRedux = (warranties) => {
  return {
    type: UPDATE_WATCH_WARRANTIES,
    data: warranties,
  };
};
