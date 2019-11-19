import {combineReducers, createStore} from "redux";
import SelectedTextReducer from "./reducers/SelectedTextReducer";


let reducers = combineReducers({
    SelectedTextReducer
});

let store = createStore(reducers);

export default store;
