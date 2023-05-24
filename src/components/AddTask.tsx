"use client";

import { addTodoItem } from "@/app/api/route";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Modal from "@/components/Modal";

const AddTask = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodoItem({
      id: uuidv4(),
      text: newTodo,
    });
    setNewTodo("");
    handleModalClose();
    router.refresh();
  };

  return (
    <>
      <button
        onClick={handleModalOpen}
        className="flex items-center gap-2 bg-[#339af0] text-[#f8f9fa] rounded mt-3 md:mt-0 py-2 px-4"
      >
        Add New Task <AiOutlinePlus size={18} />
      </button>
      {showModal && (
        <Modal onClick={handleModalClose}>
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-xl">Add New Task</h2>
            <input
              type="text"
              placeholder="What is your new task?"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
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

export default AddTask;
