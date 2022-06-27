import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import {devToolsEnhancer} from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import {loginReducer} from 'p1-Main/c2-bll';

const rootReducer = combineReducers({
    login: loginReducer
})

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer())

export const store = createStore(rootReducer, undefined, composedEnhancers)

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch