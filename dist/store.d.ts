import { RematchDispatch, RematchRootState } from '@rematch/core';
import { RootModel } from './root';
export declare const store: import("@rematch/core").RematchStore<RootModel, Record<string, never>>;
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
