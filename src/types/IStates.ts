export const IStates = {
    IDLE: 'idle',
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error',
} as const;

export type IStateKeys = (typeof IStates)[keyof typeof IStates];
