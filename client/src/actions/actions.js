import axios from 'axios';

export const LOGIN = 'LOGIN';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';

export function login(user, history) {
    return dispatch => {
        axios.post('http://localhost:3001/api/v1/user/login', user).then((response) => {
            localStorage.setItem('token', response.data.body.token);

            const config = {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            };
            axios.post('http://localhost:3001/api/v1/user/profile', {}, config).then((response) => {
                dispatch({
                    type: LOGIN,
                    user: response.data.body
                });
                history.push('/profile');
            })
        });
    }
}

export function saveProfile(user) {
    return dispatch => {
        dispatch(editProfile(false));

        const config = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        };
        axios.put('http://localhost:3001/api/v1/user/profile', { ...user }, config).then((response) => {
            dispatch({
                type: SAVE_PROFILE,
                user: response.data.body
            });
        });
    }
}

export const editProfile = isEditing => ({
    type: EDIT_PROFILE,
    isEditing
})
