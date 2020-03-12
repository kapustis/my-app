import {
    FETCH_QUIZZES_START, FETCH_QUIZZES_SUCCESS, FETCH_QUIZZES_ERROR,
    FETCH_QUIZ_SUCCESS, QUIZ_SET_STATE, QUIZ_COMPLETED, QUIZ_RETRY, QUIZ_NEXT_QUESTION
} from '../actions/quiz'

const initialState = {
    quizzes: [],
    quiz: null,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    isCompleted: false,
    res: {},
    loading: false,
    error: null
};

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZZES_START: {
            return {...state, loading: true}
        }
        case FETCH_QUIZZES_SUCCESS: {
            return {...state, loading: false, quizzes: action.quizzes}
        }
        case FETCH_QUIZZES_ERROR: {
            return {...state, loading: false, error: action.error}
        }
        /**quiz*/
        case FETCH_QUIZ_SUCCESS: {
            return {...state, loading: false, quiz: action.quiz}
        }
        case QUIZ_SET_STATE:{
            return {...state, answerState: action.answerState, res: action.res}
        }
        case QUIZ_COMPLETED: {
            return {...state, isCompleted: true}
        }
        case QUIZ_NEXT_QUESTION:{
            return {...state, answerState: null, activeQuestion: action.number}
        }
        case QUIZ_RETRY: {
            return {...state, activeQuestion: 0, answerState: null, isCompleted: false, res: {}}
        }

        default: {
            return state
        }
    }
}
