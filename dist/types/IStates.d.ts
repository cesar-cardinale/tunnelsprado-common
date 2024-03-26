export declare const IStates: {
    readonly IDLE: "idle";
    readonly LOADING: "loading";
    readonly LOADED: "loaded";
    readonly ERROR: "error";
};
export type IStateKeys = (typeof IStates)[keyof typeof IStates];
