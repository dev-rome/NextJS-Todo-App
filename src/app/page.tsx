import { getTodos } from "@/app/api/route";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const todo = await getTodos();

  return (
    <main className="max-w-4xl mx-auto h-screen mt-4 px-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-medium underline">Todo List App</h1>
        <AddTask />
      </div>
      <div className="flex justify-between items-center bg-[#ced4da] rounded mt-3 py-3 px-4">
        <p className="text-xs font-bold">TASK</p>
        <p className="text-xs font-bold">ACTION</p>
      </div>
      <ul className="flex flex-col gap-3 mt-3">
        {todo.map((item) => (
          <TodoList key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
