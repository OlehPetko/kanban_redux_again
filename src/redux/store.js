import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import teams from "./reducer";


const store = createStore(
    teams,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store