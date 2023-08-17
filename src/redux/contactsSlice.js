import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Foxtrot', number: '0-800-300-353' },
  { id: 'id-2', name: 'Comfi', number: '0-800-303-505' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    del: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, del } = contactsSlice.actions;
