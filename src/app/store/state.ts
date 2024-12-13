import { RouterReducerState } from '@ngrx/router-store';
import * as books from './slices/books/books.store';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  router: RouterReducerState;
  [books.featureKey]: books.State;
}
