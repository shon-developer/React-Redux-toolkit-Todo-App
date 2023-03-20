import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue([]);
  };

  return (
    <div>
      <input
        className="py-1 px-2 rounded-sm w-[350px] text-black border-none outline-none"
        type="text"
        placeholder="Enter your task here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={addTask}
        className="ml-4 bg-blue-400 text-white-400 py-1 px-2 rounded-sm"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
