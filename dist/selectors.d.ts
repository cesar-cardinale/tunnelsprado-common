import { RootState } from './store';
export declare const getStates: (state: RootState) => never;
export declare const getTicketsFlux: (state: RootState) => never;
export declare const getReceipts: (state: RootState) => never;
export declare const getRefunds: (state: RootState) => never;
export declare const getBanks: (state: RootState) => never;
export declare const getConfig: (state: RootState) => never;
export declare const getTickets: (state: RootState) => never;
export declare const getPosts: (state: RootState) => {
    state: import("./types/IStates").IStateKeys;
    data: import("./types/IPost").IPost[];
};
export declare const getTraffic: (state: RootState) => {
    state: import("./types/IStates").IStateKeys;
    data: import("./types/ITraffic").ITraffic;
};
