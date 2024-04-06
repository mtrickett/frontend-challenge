import { HiOutlineClipboardDocumentCheck as Icon } from "react-icons/hi2";
import NewTodoForm from "./NewTodoForm";
import TodosList from "./TodosList";
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
      {todos.length > 0 && (
        <>
          <TodosList completed={false} />
          <TodosList completed={true} />
        </>
      )}
    </div>
  );
};

export default TodosHome;
