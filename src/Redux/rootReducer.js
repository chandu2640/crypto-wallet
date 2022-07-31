import { combineReducers } from "redux";
import fetchReducer from './data/reducer'


const rootReducer = combineReducers({
    fetchReducer:fetch
});

export default rootReducer;
