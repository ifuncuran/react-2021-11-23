import {normalizedUsers} from '../../fixtures';
import {ADD_COMMENT} from "../constants";

const defaultUsers = normalizedUsers.reduce(
    (acc, user) => ({ ...acc, [user.id]: user }),
    {}
);

export default (users = defaultUsers, action) => {
    const { type, values } = action;

    switch (type) {
        case ADD_COMMENT:
            return { ...users, [values.userId]: {
                    id: values.userId,
                    name: values.name,
                }};
        default:
            return users;
    }
};
