import {
  UPDATE_WATCH_BANDS,
  UPDATE_WATCH_FACES,
  UPDATE_WATCH_WARRANTIES,
} from './watch-type';

const defaultState = {
  bands: [],
  faces: [],
  warranties: [],
};

// 构建reducer仓库的function
export default (state = defaultState, action) => {
  // 定义每个指令不同的执行方法
  switch (action.type) {
    case UPDATE_WATCH_WARRANTIES:
      return Object.assign({}, state, {warranties: action.data});

    case UPDATE_WATCH_FACES:
      console.log('pass watch-reducer: UPDATE_WATCH_FACES')
      return Object.assign({}, state, {faces: action.data});

    case UPDATE_WATCH_BANDS:
      return Object.assign({}, state, {bands: action.data});

    default:
      return state;
  }
};
