interface TodoProps {
  id: string;
  text: string;
}

export const getTodos = async (): Promise<TodoProps[]> => {
  const res = await fetch("http://localhost:3001/todo-list", {
    cache: "no-cache",
  });
  const todos = await res.json();
  return todos;
};

export const addTodoItem = async (text: TodoProps): Promise<TodoProps> => {
  const res = await fetch("http://localhost:3001/todo-list", {
    method: "POST",
    body: JSON.stringify(text),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await res.json();
  return todo;
};

export const editTodoItem = async (text: TodoProps): Promise<TodoProps> => {
  const res = await fetch(`http://localhost:3001/todo-list/${text.id}`, {
    method: "PUT",
    body: JSON.stringify(text),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodoItem = async (id: string): Promise<TodoProps> => {
  const res = await fetch(`http://localhost:3001/todo-list/${id}`, {
    method: "DELETE",
  });
  const deleteTodo = await res.json();
  return deleteTodo;
};
