import {
    LOGIN,
    SAVE_PROFILE,
    EDIT_PROFILE,
} from '../actions/actions';

export default function user(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state,
                user: action.user
            };
        case SAVE_PROFILE:
            return {
                ...state,
                user: action.user
            };
        case EDIT_PROFILE:
            return {
                ...state,
                isEditing: action.isEditing
            };
        default:
            return state
    }
};
