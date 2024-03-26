import { Models } from '@rematch/core';
import { posts } from './models/posts';
import { traffic } from './models/traffic';
export interface RootModel extends Models<RootModel> {
    posts: typeof posts;
    traffic: typeof traffic;
}
export declare const models: RootModel;
