import { requestCreateTodo } from "@/lib/todos-lib";
import useSWR from "swr";
import { useState } from "react";

export const NewTodoForm = () => {
  const [input, setInput] = useState("");
  const { mutate } = useSWR("todos");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <form className="flex flex-col space-y-2 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:space-x-2 sm:space-y-0">
      <div className="relative w-full">
        <input
          required
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={handleChange}
          className="w-full rounded border border-stone-200 bg-white px-4 py-3 text-base transition-opacity focus:border-red-300 focus:ring-1 focus:ring-red-300 focus-visible:outline-none disabled:opacity-50"
        />
      </div>
      <button
        disabled={!input}
        onClick={async () => {
          try {
            await mutate(requestCreateTodo({ title: input }));
            setInput("");
            console.log("Successfully added the new item.");
          } catch (e) {
            console.log("Failed to add the new item.");
          }
        }}
        type="button" // change back to submit for accessibilty
        className="min-w-[128px] rounded border border-red-600 bg-red-500 px-2 text-base font-medium leading-10 text-white hover:bg-red-600 focus-visible:outline-2  focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:border-transparent disabled:bg-gray-200"
      >
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
