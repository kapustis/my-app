import axios from 'axios';

export const CREATE_QUIZ_QUESTION = 'CREATE_QUIZ_QUESTION';
export const RESET_QUIZ_CREATION = 'RESET_QUIZ_CREATION';

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION, item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        try {
            await axios.post("https://react-app-78e60.firebaseio.com/quizzes.json", getState().createReducer.quiz);
            dispatch(resetQuizCreation())
        } catch (errorBag) {
            alert(errorBag)
        }
    }
}
