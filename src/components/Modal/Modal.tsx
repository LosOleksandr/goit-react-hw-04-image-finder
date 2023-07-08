import React, { useEffect } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

interface ModalProps {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ handleModal, children }) => {
  const onBackdropClick = () => {
    handleModal(false);
  };

  const onEscapePress = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      handleModal(false);
    }
  };

  

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  });
  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
  );
};

export default Modal;
