import axios from 'axios';
/*
 * action types
 */
export const FETCH_QUIZZES_START = 'FETCH_QUIZZES_START';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR';

export function fetchQuizzes() {
    return async dispatch => {
        dispatch(fetchQuizzesStart());
        try {
            const res = await axios.get('https://react-app-78e60.firebaseio.com/quizzes.json');
            let quizzes = [];
            Object.keys(res.data).forEach((key, index) => {
                quizzes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            });
            dispatch(fetchQuizzesSuccess(quizzes))
        } catch (error) {
            dispatch(fetchQuizzesError(error))
        }
    }
}

/*
 * action creators
 */

export function fetchQuizzesStart() {
    return {
        type: FETCH_QUIZZES_START
    }
}

export function fetchQuizzesSuccess(quizzes) {
    return {
        type: FETCH_QUIZZES_SUCCESS, quizzes
    }
}

export function fetchQuizzesError(error) {
    return {
        type: FETCH_QUIZZES_ERROR, error
    }
}
