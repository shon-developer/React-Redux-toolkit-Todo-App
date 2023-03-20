import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TotalCompletedItems from "./components/TotalCompletedItems";

function App() {
  return (
    <div className="App w-full h-screen bg-[#111111] text-white">
      <h1 className="text-3xl font-bold p-6">ToDo App (Redux-toolkit)</h1>
      <AddTodo />
      <TodoList />
      <TotalCompletedItems />
    </div>
  );
}

export default App;
