interface ModalProps {
  visible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  closeModal,
  children,
}) => {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={closeModal} // Close modal when clicking on the overlay
    >
      <div
        className={`relative rounded-2xl shadow-lg`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
