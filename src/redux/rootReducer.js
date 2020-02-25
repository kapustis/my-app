import {DECREMENT, INCREMENT, INCREMENT_NUMBER, RESET} from "./action/action";

const initialState = {
    counter: 0
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
        case INCREMENT_NUMBER:
            return {
                counter: state.counter + action.payload
            };
        case DECREMENT:
            return {
                counter: state.counter - 1
            };
        case RESET:
            return {
                counter: state.counter = 0
            };
        default:
            return state
    }
}
