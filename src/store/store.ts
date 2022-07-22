import { devToolsEnhancer } from '@redux-devtools/extension';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import { loginReducer } from 'store';

const rootReducer = combineReducers({
  login: loginReducer,
});

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

export const store = createStore(rootReducer, undefined, composedEnhancers);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
