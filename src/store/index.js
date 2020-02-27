import {combineReducers} from 'redux'
import authReducer from './reducers/auth'
import quiz from "./reducers/quiz";

export default combineReducers({
    auth: authReducer,
    quiz
})
