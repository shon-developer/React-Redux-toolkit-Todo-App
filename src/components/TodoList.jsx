import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className=" flex flex-col gap-2 justify-center items-center w-full mt-6">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default TodoList;
