import { getRouterSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

/**
 * Router Selectors
 */
const defaultSelectors = getRouterSelectors();

export const selectors = {
  ...defaultSelectors,
  // selectCurrentPage: createSelector(defaultSelectors.selectRouteData, (data: any) => get(data, 'page', null)),
};
