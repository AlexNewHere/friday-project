import {combineReducers, legacy_createStore as createStore} from 'redux'
import {devToolsEnhancer} from '@redux-devtools/extension';

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, devToolsEnhancer())

export type AppRootStateType = ReturnType<typeof rootReducer>