import { HiCheck, HiOutlineTrash } from "react-icons/hi2";
import { requestDeleteTodo, requestUpdateTodo } from "@/lib/todos-lib";

import { useTodos } from "@/hooks/useTodos";

type TodosListProps = {
  completed: boolean;
};

export const TodosList = ({ completed }: TodosListProps) => {
  const { todos, isLoading, isError, mutate } = useTodos();

  const heading = completed ? "Completed" : "Incomplete";
  const emptyMessage = completed
    ? "No completed todos. Get to work!"
    : "No incomplete todos. Add a new one!";

  const todosList =
    todos.length > 0 ? todos.filter((todo) => todo.completed == completed) : [];

  const handleChange = async (todo: any) => {
    todo.completed = !todo.completed;

    try {
      await requestUpdateTodo(todo);
      mutate([...todos]);
      console.log("Successfully updated the todo.");
    } catch (e) {
      console.log("Failed to update the todo.");
    }
  };

  const handleDelete = async (todo: any) => {
    try {
      await requestDeleteTodo(todo.id);
      mutate([...todos]);
      console.log("Successfully deleted the todo.");
    } catch (e) {
      console.log("Failed to delete the todo.");
    }
  };

  return (
    <>
      <h2 className="inline-block text-2xl font-semibold">{heading}</h2>
      <span className="ml-3 inline-block h-9 w-9 rounded-full bg-gray-700 p-2 text-center align-bottom text-sm font-bold text-white">
        {todosList.length}
      </span>
      {!isLoading && !isError && (
        <ul className="m-0 flex flex-col divide-y divide-slate-200 border-t border-slate-200">
          {todosList.length > 0 ? (
            todosList.map((todo) => {
              return (
                <li key={todo.id} className="py-2.5">
                  <label className="text-md group relative -mx-4 block rounded-xl border border-white p-4 font-medium hover:cursor-pointer hover:border-stone-200 hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="appearance-none"
                      onChange={() => handleChange(todo)}
                    />
                    <HiCheck
                      className={`mr-3 inline-block h-9 w-9 rounded-full border-2 border-stone-300 p-1.5 text-center text-white ${
                        todo.completed
                          ? "border-none bg-green-600"
                          : "group-hover:border-stone-400"
                      }`}
                    />
                    {todo.title}
                    <button
                      onClick={() => handleDelete(todo)}
                      className="absolute right-2 top-2 hidden p-3 text-2xl text-stone-400 hover:text-red-600 group-hover:inline-block"
                    >
                      <HiOutlineTrash />
                    </button>
                  </label>
                </li>
              );
            })
          ) : (
            <p className="my-4">{emptyMessage}</p>
          )}
        </ul>
      )}
    </>
  );
};

export default TodosList;
