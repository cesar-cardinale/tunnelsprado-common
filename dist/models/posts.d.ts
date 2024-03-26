import { RootModel } from '../root';
import { IPost } from '../types/IPost';
import { IStateKeys } from "../types/IStates";
export declare const posts: {
    name?: string | undefined;
    state: {
        state: IStateKeys;
        data: IPost[];
    };
} & {
    effects: (dispatch: import("@rematch/core").RematchDispatch<RootModel>) => {
        fetch(this: import("@rematch/core").ModelEffectThisTyped): Promise<void>;
    };
} & {
    reducers: {
        set(state: {
            state: IStateKeys;
            data: IPost[];
        }, payload: IPost[]): {
            data: IPost[];
            state: IStateKeys;
        };
        setState(state: {
            state: IStateKeys;
            data: IPost[];
        }, payload: IStateKeys): {
            state: IStateKeys;
            data: IPost[];
        };
    };
} & ({} | {
    baseReducer: import("redux").Reducer<{
        state: IStateKeys;
        data: IPost[];
    }>;
});
