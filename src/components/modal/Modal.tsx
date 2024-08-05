import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [show, setShow] = useState(isOpen);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setIsExiting(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsExiting(true);
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "auto";
      }, 300);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-8 rounded shadow-lg max-w-sm mx-auto relative transition-transform transform ${
          isExiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700">This is the modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
