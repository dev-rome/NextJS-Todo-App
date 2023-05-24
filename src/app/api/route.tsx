interface TodoProps {
  id: string;
  text: string;
}

export const getTodos = async (): Promise<TodoProps[]> => {
  const res = await fetch("http://localhost:3001/todo-list");
  const todos = await res.json();
  return todos;
};
