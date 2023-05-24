import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ onClick, children }: ModalProps) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-[#212529] bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10 px-4"
    >
      <div
        onClick={stopPropagation}
        className="bg-[#f8f9fa] rounded max-w-md w-full flex justify-between p-4"
      >
        {children}
        <button
          onClick={onClick}
          className="bg-[#339af0] rounded-full p-1 self-start"
        >
          <AiOutlineClose size={16} color="#f8f9fa" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
