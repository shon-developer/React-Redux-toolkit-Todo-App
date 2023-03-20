import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    // { id: 1, title: "Task One", status: false },
    // { id: 2, title: "Task Two", status: false },
    // { id: 3, title: "Task Three", status: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        status: false,
      };
      state.push(newTask);
    },
    markDone: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});
export const { addTodo, markDone, deleteTodo, clearAll } = todoSlice.actions;

export default todoSlice.reducer;
