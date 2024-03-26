import { createModel } from '@rematch/core';
import { publicAPI } from '../services/publicAPI';
import { IStates } from "../types/IStates";
export const traffic = createModel()({
    state: {
        state: IStates.IDLE,
        data: {},
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
        async fetch(payload, root) {
            if (root.traffic.state !== IStates.LOADED) {
                dispatch.traffic.setState(IStates.LOADING);
            }
            const response = await publicAPI.traffic.fetch();
            if (response.status === 'success' && response.data) {
                dispatch.traffic.set(response.data);
                dispatch.traffic.setState(IStates.LOADED);
            }
            else {
                dispatch.traffic.setState(IStates.ERROR);
            }
        },
    }),
});
