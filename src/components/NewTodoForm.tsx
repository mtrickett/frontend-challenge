import { HiXCircle } from "react-icons/hi2";
import { requestCreateTodo } from "@/lib/todos-lib";
import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";

export const NewTodoForm = () => {
  const [input, setInput] = useState("");
  const { todos, mutate } = useTodos();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <form
      className="flex flex-col space-y-2 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:space-x-2 sm:space-y-0"
      onSubmit={(ev) => ev.preventDefault()}
    >
      <div className="relative w-full">
        <input
          required
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={handleChange}
          className="w-full rounded border border-stone-200 bg-white px-4 py-3 text-base transition-opacity focus:border-red-300 focus:ring-1 focus:ring-red-300 focus-visible:outline-none disabled:opacity-50"
        />
        {input && (
          <HiXCircle
            className="absolute right-3 top-3.5 text-2xl text-gray-300"
            onClick={() => setInput("")}
          />
        )}
      </div>
      <button
        disabled={!input}
        onClick={async () => {
          try {
            await mutate(requestCreateTodo({ title: input }), {
              optimisticData: [
                ...todos,
                { id: 0, title: input, completed: false, priority: 9999 },
              ],
              rollbackOnError: true,
              populateCache: true,
              revalidate: true,
            });
            setInput("");
            console.log("Successfully added the new item.");
          } catch (e) {
            console.log("Failed to add the new item.");
          }
        }}
        type="submit"
        className="min-w-[128px] rounded border border-red-600 bg-red-500 px-2 text-base font-medium leading-10 text-white hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:border-transparent disabled:bg-gray-200"
      >
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
