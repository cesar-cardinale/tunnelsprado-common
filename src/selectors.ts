import { RootState } from './store';

export const getPosts = (state: RootState) => state.posts;
export const getTraffic = (state: RootState) => state.traffic;
