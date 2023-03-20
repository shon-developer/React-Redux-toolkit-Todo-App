import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { markDone, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();

  const taskComplete = () => {
    dispatch(markDone({ id: id, status: !status }));
  };

  const deleteTask = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="flex px-6 py-1 rounded-sm bg-green-900 w-[450px] items-center justify-between text-lg font-semibold">
      <div>
        <span className="mr-6">{title}</span>
      </div>
      <span>
        <span onClick={taskComplete} title="Task complete/ not complete/">
          <DoneIcon />
        </span>
        {status ? null : (
          <span>
            <EditIcon />
          </span>
        )}
        <span onClick={deleteTask} title="Delete Task">
          <DeleteIcon />
        </span>
      </span>
    </div>
  );
};

export default TodoItem;
