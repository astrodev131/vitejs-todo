import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      return {
        ...state,
        todos: [...state?.todos, action?.payload],
      };
    },
    //update todos
    updateTodos: (state, action) => {
      const note = action?.payload.text;
      const id = action?.payload.tableId;
      return {
        ...state,
        todos: state.todos.map((value) =>
          value.id === id ? { ...value, note: note } : value
        ),
      };
    },
    //completed
    completeTodos: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((value) =>
          value.id === action.payload
            ? { ...value, checked: !value.checked }
            : value
        ),
      };
    },

    deleteTodos: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((value) => value.id !== action.payload),
      };
    },
  },
});

export const { addTodos, deleteTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
