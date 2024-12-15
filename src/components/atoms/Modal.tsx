import { useEffect, useRef } from "react";

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
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (visible) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [visible]);

  return (
    <dialog
      ref={modalRef}
      onClose={closeModal}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          closeModal();
        }
      }}
    >
      {children}
    </dialog>
  );
};
