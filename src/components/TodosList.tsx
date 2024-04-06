import { useTodos } from "@/hooks/useTodos";

type TodosListProps = {
  completed: boolean;
};

export const TodosList = ({ completed }: TodosListProps) => {
  const { todos, isLoading, isError } = useTodos();

  const heading = completed ? "Completed" : "Incomplete";
  const emptyMessage = completed
    ? "No completed todos. Get to work!"
    : "No incomplete todos. Add a new one!";

  const todosList =
    todos.length > 0 ? todos.filter((todo) => todo.completed == completed) : [];

  // if (todosList.length == 0) return null;

  return (
    <>
      <h2 className="inline-block text-2xl font-semibold">{heading}</h2>
      <span className="ml-3 inline-block w-8 rounded-full bg-gray-700 p-2 text-center align-bottom text-xs font-semibold text-white">
        {todosList.length}
      </span>
      {!isLoading && !isError && (
        <ul className="m-0 flex flex-col divide-y divide-slate-200 border-t border-slate-200">
          {todosList.length > 0 ? (
            todosList.map((todo) => {
              return (
                <li key={todo.id} className="py-2.5">
                  <label className="text-md -mx-6 block rounded-xl border border-white p-4 font-medium hover:cursor-pointer hover:border-stone-200 hover:bg-stone-50">
                    <input type="checkbox" checked={todo.completed} />
                    {todo.title}
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
