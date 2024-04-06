import { Todo } from "@/lib/todos-lib";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useTodos = () => {
  const { data, error, isLoading, mutate } = useSWR<Todo[]>("/todos", fetcher);

  return {
    todos: data ?? [],
    isLoading,
    isError: error !== undefined,
    error,
    mutate,
  };
};
