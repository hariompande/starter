import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

export const featureKey = 'booking';

export const actions = {
  setParamId: createAction('[Booking] Set Param Id', props<{ paramId: string }>()),
};

export interface State {
  paramId: string | null;
}

export const initialState: State = {
  paramId: null,

};

export const reducer = createReducer(
  initialState,
  on(actions.setParamId, (state, { paramId }) => ({
    ...state,
    paramId,
  })),
);

// Selectors
export const selectSlice = createFeatureSelector<State>(featureKey);

export const selectors = {
  selectBookingProductId: createSelector(selectSlice, (state: State) => state.paramId),
};
