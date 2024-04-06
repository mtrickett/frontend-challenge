import { useTodos } from "@/hooks/useTodos";

type TodosListProps = {
  completed: boolean;
};

export const TodosList = ({ completed }: TodosListProps) => {
  const { todos, isLoading, isError } = useTodos();

  const heading = completed ? "Completed" : "Incomplete";
  const message = completed
    ? "No completed todos. Get to work!"
    : "No incomplete todos. Add a new one!";

  const todosList =
    todos.length > 0 ? todos.filter((todo) => todo.completed == completed) : [];

  return (
    <>
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {!isLoading && !isError && (
        <ul>
          {todosList.length > 0 ? (
            todosList.map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })
          ) : (
            <p>{message}</p>
          )}
        </ul>
      )}
    </>
  );
};

export default TodosList;
