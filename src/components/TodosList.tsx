import { useTodos } from "@/hooks/useTodos";

type TodosListProps = {
  completed: boolean;
};

export const TodosList = ({ completed }: TodosListProps) => {
  const { todos } = useTodos();

  const heading = completed ? "Completed" : "Incomplete";

  return (
    <>
      <h3>{heading}</h3>
      <ul>
        {todos.length > 0
          ? todos.map((todo) => {
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
