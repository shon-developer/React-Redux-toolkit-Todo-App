import React from "react";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task One", status: false },
    { id: 2, title: "Task Two", status: false },
    { id: 3, title: "Task Three", status: false },
    { id: 4, title: "Task Four", status: false },
    { id: 5, title: "Task Five", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // todo AddTask
  const addTask = () => {
    if (newTask) {
      let taskNumber = toDo.length + 1;
      let newEntry = { id: taskNumber, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
    }
    setNewTask("");
  };
  // todo Delete Task
  const deleteTask = (id) => {
    const del = toDo.filter((task) => task.id !== id);
    setToDo(del);
  };

  // todo Mark Done
  const markDone = (id) => {
    let completedTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(completedTask);
  };

  // todo change task for update
  const changeTask = (e) => {
    let changeToUpdate = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(changeToUpdate);
  };

  // todo updateTask
  const updateTask = () => {
    let UpdateOldTask = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...UpdateOldTask, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  // todo cancel update
  const cancelTask = () => {
    setUpdateData("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div>
        {updateData && updateData ? (
          <div>
            <input
              className="py-1 px-2 rounded-sm w-[320px] text-black border-none outline-none mb-4"
              type="text"
              placeholder="Enter your task here..."
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
            />
            <button onClick={updateTask} className="ml-4">
              Update
            </button>
            <button onClick={cancelTask} className="ml-4">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <input
              className="py-1 px-2 rounded-sm w-[320px] text-black border-none outline-none"
              type="text"
              placeholder="Enter your task here..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask} className="ml-4">
              Add Task
            </button>
          </div>
        )}
      </div>
      <div>
        {toDo.map((task, index) => {
          return (
            <div
              key={task.id}
              className="bg-green-500 w-[350px] mt-2 py-1 px-2 rounded-sm flex justify-between"
            >
              <div>
                <span>
                  <span className="mr-2">{index + 1}</span>
                  {task.title}
                </span>
              </div>
              <div>
                <span
                  onClick={(e) => markDone(task.id)}
                  title="Completed/ not Completed"
                >
                  <CheckCircleIcon />
                </span>
                {task.status ? null : (
                  <span
                    onClick={() =>
                      setUpdateData({
                        id: task.id,
                        title: task.title,
                        status: task.status ? true : false,
                      })
                    }
                    title="Update Task"
                  >
                    <EditIcon />
                  </span>
                )}
                <span onClick={() => deleteTask(task.id)} title="Delete Task">
                  <DeleteIcon />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
