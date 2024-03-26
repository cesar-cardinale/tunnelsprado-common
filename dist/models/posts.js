import { createModel } from '@rematch/core';
import { publicAPI } from '../services/publicAPI';
import { IStates } from "../types/IStates";
export const posts = createModel()({
    state: {
        state: IStates.IDLE,
        data: [],
    },
    reducers: {
        set(state, payload) {
            return { ...state, data: payload };
        },
        setState(state, payload) {
            return { ...state, state: payload };
        },
    },
    effects: (dispatch) => ({
        async fetch() {
            dispatch.posts.setState(IStates.LOADING);
            const response = await publicAPI.post.fetch();
            if (response.status === 'success' && response.data) {
                dispatch.posts.set(response.data);
                dispatch.posts.setState(IStates.LOADED);
            }
            else {
                dispatch.posts.setState(IStates.ERROR);
            }
        },
    }),
});
