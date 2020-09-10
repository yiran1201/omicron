import {UPDATE_PARTNERS} from './brand-type';

const defaultState = {
  partners: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PARTNERS:
      return Object.assign({}, state, {partners: action.data});
    default:
      return state;
  }
};
