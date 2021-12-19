import { v4 as uuidv4 } from 'uuid';
import {ADD_COMMENT} from "../constants";

export default (store) => (next) => (action) => {
    if (action.type === ADD_COMMENT) {
        action.values.userId = uuidv4()
        action.values.reviewId = uuidv4()
    }
    next(action);
};
