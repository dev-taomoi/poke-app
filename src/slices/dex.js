import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  dex: []
};

const dexSlice = createSlice({
  name: 'dex',
  initialState,
  reducers: {
    getDex: (state) => { state.loading = true; },
    getDexSuccess: (state, { payload }) => {
      state.dex = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getDexFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const { getDex, getDexSuccess, getDexFailure } = dexSlice.actions;

export const dexSelector = (state) => { return state.dex; }

export const dexReducer = dexSlice.reducer;

export function fetchDex()
{
  return async (dispatch) => {
    dispatch( getDex() );
    try {
      const response = await fetch(' https://pokeapi.co/api/v2/pokemon?limit=649');
      const data = await response.json();
      const dex = data.results.map((o, i) => {
        return { id: i + 1, name: o.name, url: o.url }; 
      });
      dispatch( getDexSuccess(dex) );
    } catch (error) {
      dispatch( getDexFailure() );
    }
  }
}
