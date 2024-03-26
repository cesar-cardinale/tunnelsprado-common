import { createModel } from '@rematch/core';
import { RootModel } from '../root';
import { IPost } from '../types/IPost';
import { publicAPI } from '../services/publicAPI';
import {IStates, IStateKeys} from "../types/IStates";

export const posts = createModel<RootModel>()({
  state: {
    state: IStates.IDLE,
    data: [],
  } as { state: IStateKeys; data: IPost[] },
  reducers: {
    set(state, payload: IPost[]) {
      return { ...state, data: payload };
    },
    setState(state, payload: IStateKeys) {
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
      } else {
        dispatch.posts.setState(IStates.ERROR);
      }
    },
  }),
});
