import {combineReducers} from 'redux'
import authReducer from './reducers/auth'
import createReducer from "./reducers/quizCreate";
import quiz from "./reducers/quiz";

export default combineReducers({
    auth: authReducer,
    createReducer:createReducer,
    quiz
})
