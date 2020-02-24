const initialState = {
    counter: 0
};

export default function rootReducer(state = initialState, action) {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'RESET':
            return {
                counter: state.counter = 0
            }
    }

    return state
}
