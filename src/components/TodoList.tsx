"use client";

import { editTodoItem, deleteTodoItem } from "@/app/api/route";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "@/components/Modal";

interface TodoListProps {
  item: {
    id: string;
    text: string;
  };
}

const TodoList = ({ item }: TodoListProps) => {
  const router = useRouter();
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");

  const handleModalClose = () => setShowModalEdit(false);

  const handleDelete = async () => {
    await deleteTodoItem(item.id);
    router.refresh();
  };

  const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editTodoItem({
      id: item.id,
      text: editTodo,
    });
    setEditTodo("");
    handleModalClose();
    router.refresh();
  };

  return (
    <>
      <li className="flex justify-between items-center list-none border-[#343a40] border-b-2 pb-2 last:border-b-0">
        {item.text}
        <div className="flex gap-2">
          <span
            onClick={() => setShowModalEdit(true)}
            className="text-[#37b24d] cursor-pointer"
          >
            <FiEdit size={20} />
          </span>
          <span
            onClick={handleDelete}
            className="text-[#f03e3e] cursor-pointer"
          >
            <FiTrash2 size={20} />
          </span>
        </div>
      </li>

      {showModalEdit && (
        <Modal onClick={handleModalClose}>
          <form className="w-full" onSubmit={handleSubmitEdit}>
            <h2 className="text-xl">Edit Current Task</h2>
            <input
              type="text"
              placeholder={item.text}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="w-full outline-none border border-[#ced4da] mt-4 py-2 pl-2"
            />
            <button
              type="submit"
              className="bg-[#339af0] text-[#f8f9fa] rounded mt-2 py-1 px-4"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default TodoList;
