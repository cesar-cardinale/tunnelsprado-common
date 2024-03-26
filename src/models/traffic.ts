import { createModel } from '@rematch/core';
import { RootModel } from '../index';
import { publicAPI } from '../services/publicAPI';
import { ITraffic } from '../types/ITraffic';
import {IStateKeys, IStates} from "../types/IStates";

export const traffic = createModel<RootModel>()({
  state: {
    state: IStates.IDLE,
    data: {},
  } as { state: IStateKeys; data: ITraffic },
  reducers: {
    set(state, payload: ITraffic) {
      return { ...state, data: payload };
    },
    setState(state, payload: IStateKeys) {
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
      } else {
        dispatch.traffic.setState(IStates.ERROR);
      }
    },
  }),
});
