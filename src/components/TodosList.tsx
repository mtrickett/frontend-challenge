import { useTodos } from "@/hooks/useTodos";

type TodosListProps = {
  completed: boolean;
};

export const TodosList = ({ completed }: TodosListProps) => {
  const { todos } = useTodos();

  const heading = completed ? "Completed" : "Incomplete";

  const todosList =
    todos.length > 0
      ? todos.filter((todo) => todo.completed == completed)
      : null;

  return (
    <>
      <h3>{heading}</h3>
      <ul>
        {todosList
          ? todosList.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.title} - {todo.completed.toString()}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default TodosList;
