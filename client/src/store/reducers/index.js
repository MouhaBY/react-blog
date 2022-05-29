import AuthReducer from "./AuthReducer";
import PostsReducer from "./posts_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth_reducer: AuthReducer,
    posts_reducer: PostsReducer
})

export default rootReducer;