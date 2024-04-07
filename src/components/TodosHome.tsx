import ErrorMessage from "./ErrorMessage";
import { HiOutlineClipboardDocumentCheck as Icon } from "react-icons/hi2";
import NewTodoForm from "./NewTodoForm";
import TodosList from "./TodosList";
import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";

const Header = () => (
  <header className="flex flex-row items-center space-x-2">
    <Icon className="h-10 w-10" />
    <h1 className="font-serif text-3xl font-medium">To-Do List</h1>
  </header>
);

export const TodosHome = () => {
  const [mutateError, setMutateError] = useState(false);
  const { todos, isLoading, isError } = useTodos();

  return (
    <div className="space-y-6">
      {mutateError && (
        <ErrorMessage
          message={"Oops, there was a problem!"}
          dismiss={() => setMutateError(false)}
        />
      )}
      <Header />
      <NewTodoForm
        toggleError={(hasError: boolean) => setMutateError(hasError)}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong. Please refresh and try again.</p>}
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
