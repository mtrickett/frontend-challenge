import { HiOutlineClipboardDocumentCheck as Icon } from "react-icons/hi2";
import NewTodoForm from "./NewTodoForm";
import { useTodos } from "@/hooks/useTodos";

const Header = () => (
  <header className="flex flex-row items-center space-x-2">
    <Icon className="h-10 w-10" />
    <h1 className="font-serif text-3xl font-medium">To-Do List</h1>
  </header>
);

export const TodosHome = () => {
  const { todos, isLoading, isError } = useTodos();

  return (
    <div className="space-y-6">
      <Header />
      <NewTodoForm />
      {isLoading && <p>loading...</p>}
      {isError && <p>error :(</p>}
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
    </div>
  );
};

export default TodosHome;
