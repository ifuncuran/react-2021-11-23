import { DECREMENT, INCREMENT, REMOVE, ADD_COMMENT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addComment = (values) => ({ type: ADD_COMMENT, values });
