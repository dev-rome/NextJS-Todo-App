import TodoList from "@/components/TodoList";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto h-screen mt-4 px-4">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-medium underline">Todo List App</h1>
        <button className="flex items-center gap-2 bg-[#339af0] text-[#f8f9fa] rounded mt-3 md:mt-0 py-2 px-4">
          Add New Task <AiOutlinePlus size={18} />
        </button>
      </div>
      <div className="flex justify-between items-center bg-[#ced4da] rounded mt-3 py-3 px-4">
        <p className="text-xs font-bold">TASK</p>
        <p className="text-xs font-bold">ACTION</p>
      </div>
      {/* <TodoList /> */}
    </main>
  );
}
