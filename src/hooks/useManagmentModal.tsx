import { useState } from "react";

export function useManagmentModal() {
  const [visible, setvisible] = useState(false);

  const openModal = () => {
    setvisible(true);
  };

  const closeModal = () => {
    setvisible(false);
  };

  return { visible, openModal, closeModal };
}
