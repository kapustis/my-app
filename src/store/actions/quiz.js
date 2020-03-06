import axios from 'axios';
/*
 * action types
 */
export const FETCH_QUIZZES_START = 'FETCH_QUIZZES_START';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR';

export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const QUIZ_SET_STATE = 'QUIZ_SET_STATE';
export const QUIZ_COMPLETED = 'QUIZ_COMPLETED';
export const QUIZ_NEXT_QUESTION = 'QUIZ_NEXT_QUESTION';
export const QUIZ_RETRY = 'QUIZ_RETRY';

export function fetchQuizzes() {
    return async dispatch => {
        dispatch(fetchQuizzesStart());
        try {
            const res = await axios.get('https://react-app-78e60.firebaseio.com/quizzes.json');
            let quizzes = [];
            Object.keys(res.data).forEach((key, index) => {
                quizzes.push({id: key, name: `Тест №${index + 1}`})
            });
            dispatch(fetchQuizzesSuccess(quizzes))
        } catch (error) {
            dispatch(fetchQuizzesError(error))
        }
    }
}

export function fetchQuiz(id) {
    return async dispatch => {
        dispatch(fetchQuizzesStart());
        try {
            const quiz = (await axios.get(`https://react-app-78e60.firebaseio.com/quizzes/${id}.json`)).data;
            dispatch(fetchQuizSuccess(quiz))
        } catch (error) {
            dispatch(fetchQuizzesError(error))
        }
    }
}



/*
 * action creators
 */

export function fetchQuizzesStart() {
    return {type: FETCH_QUIZZES_START}
}

export function fetchQuizzesSuccess(quizzes) {
    return {type: FETCH_QUIZZES_SUCCESS, quizzes}
}

export function fetchQuizzesError(error) {
    return {type: FETCH_QUIZZES_ERROR, error}
}

export function fetchQuizSuccess(quiz) {
    return {type: FETCH_QUIZ_SUCCESS, quiz}
}

export function quizSetState(answerState, res) {
    return {type: QUIZ_SET_STATE, answerState, res}
}

export function quizCompleted() {
    return {type: QUIZ_COMPLETED}
}

export function quizNextQuestion(number) {
    return {type: QUIZ_NEXT_QUESTION, number}
}
export function retryQuiz() {
    return {type: QUIZ_RETRY}
}

export function isQuizCompleted(state) {
    return state.activeQuestion + 1 === state.quiz.length
}

export function answerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === 'success') return;
        }

        const question = state.quiz[state.activeQuestion];
        const res = state.res;

        if (question.rightAnswerId === answerId) {
            if (!res[question.id]) {
                res[question.id] = 'success';
            }
            dispatch(quizSetState({[answerId]: 'success'}, res));
            const timeOut = window.setTimeout(() => {
                if (isQuizCompleted(state)) {
                    dispatch(quizCompleted())
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeOut)
            }, 1000);

        } else {
            res[question.id] = 'error';
            dispatch(quizSetState({[answerId]: 'error'}, res));
        }
    }

}
