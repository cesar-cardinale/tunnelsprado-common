import { Models } from '@rematch/core';
import { posts } from './models/posts';
import { traffic } from './models/traffic';

export interface RootModel extends Models<RootModel> {
  // Public API
  posts: typeof posts;
  traffic: typeof traffic;
}

export const models: RootModel = {
  // Public API
  posts,
  traffic,
};
