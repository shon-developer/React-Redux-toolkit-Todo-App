import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../redux/todoSlice";

const TotalCompletedItems = () => {
  const dispatch = useDispatch();
  const completedTasks = useSelector((state) =>
    state.todos.filter((task) => task.status === true)
  );

  const removeAll = () => {
    dispatch(clearAll());
  };

  return (
    <div>
      <h4 className="mt-10 text-lg">
        Total Completed Items: {completedTasks.length}
      </h4>
      <button
        onClick={removeAll}
        className="bg-orange-500 py-1 px-2 tracking-wider mt-10 rounded-sm"
      >
        Clear All
      </button>
    </div>
  );
};

export default TotalCompletedItems;
