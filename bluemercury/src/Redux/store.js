import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {reducer as BagReducer} from "./BagReducer/reducer"

const rootReducer = combineReducers({AppReducer, AuthReducer ,BagReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));