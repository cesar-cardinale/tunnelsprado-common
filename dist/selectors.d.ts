import { RootState } from './store';
export declare const getPosts: (state: RootState) => {
    state: import("./types/IStates").IStateKeys;
    data: import("./types/IPost").IPost[];
};
export declare const getTraffic: (state: RootState) => {
    state: import("./types/IStates").IStateKeys;
    data: import("./types/ITraffic").ITraffic;
};
