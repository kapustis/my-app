/*
 * action types
 */
export const INCREMENT = 'INCREMENT';
export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
/*
 * other constants
 */


/*
 * action creators
 */

export function increment() {
    return {type: INCREMENT}
}

export function incrementNumber(number) {
    return {type: INCREMENT_NUMBER, payload: number}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}
