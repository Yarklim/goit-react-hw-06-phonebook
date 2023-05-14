import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { togleModal } from 'redux/actions';
import { Backdrop, ModalContent } from './Modal.styled';
import { EmergencyContent } from 'components/EmergencyContent';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
	const showModal = useSelector(state => state.modal);
	const dispatch = useDispatch();

	  const toggleModal = () => {
    dispatch(togleModal(showModal));
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });


  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
		  <ModalContent >
			  <EmergencyContent onClose={toggleModal} />
	  </ModalContent>
    </Backdrop>,
    modalRoot
  );
};

