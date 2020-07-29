import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const EDIT_PROFILE = 'EDIT_PROFILE';

export function requestLogin(user) {
    return {
        type: REQUEST_LOGIN,
        user
    }
}

export function editProfile(profile) {
    return {
        type: EDIT_PROFILE,
        profile
    }
}

export function login(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function saveProfile(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchPosts(subreddit))
        }
    }
}
