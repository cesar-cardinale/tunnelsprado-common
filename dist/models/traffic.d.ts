import { RootModel } from '../index';
import { ITraffic } from '../types/ITraffic';
import { IStateKeys } from "../types/IStates";
export declare const traffic: {
    name?: string | undefined;
    state: {
        state: IStateKeys;
        data: ITraffic;
    };
} & {
    effects: (dispatch: import("@rematch/core").RematchDispatch<RootModel>) => {
        fetch(this: import("@rematch/core").ModelEffectThisTyped, payload: any, root: import("@rematch/core").RematchRootState<RootModel, Record<string, never>>): Promise<void>;
    };
} & {
    reducers: {
        set(state: {
            state: IStateKeys;
            data: ITraffic;
        }, payload: ITraffic): {
            data: ITraffic;
            state: IStateKeys;
        };
        setState(state: {
            state: IStateKeys;
            data: ITraffic;
        }, payload: IStateKeys): {
            state: IStateKeys;
            data: ITraffic;
        };
    };
} & ({} | {
    baseReducer: import("redux").Reducer<{
        state: IStateKeys;
        data: ITraffic;
    }>;
});
