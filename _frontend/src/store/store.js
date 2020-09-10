import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import watchReducer from './watch-store/watch-reducer';
import brandReducer from './brand-store/brand-reducer';

//将所有的reducer放在一个中央管理
const rootReducer = combineReducers({
  watchReducer: watchReducer,
  brandReducer: brandReducer,
});

// 创建redux store的function
export const configStore = () => {
  const middleWare = [thunkMiddleWare];
  const middleWareEnhancer = applyMiddleware(...middleWare);
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
};
