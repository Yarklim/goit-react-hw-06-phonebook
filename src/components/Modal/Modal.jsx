import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent onClose={onClose}>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
}