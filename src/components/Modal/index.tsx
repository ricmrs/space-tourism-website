import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backDropHandler = (e: MouseEvent) => {
      if (modalWrapperRef.current === null) return;
      if (!modalWrapperRef?.current?.contains(e.target as Node)) {
        onClose();
      }
    }

    setIsBrowser(true);

    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, [onClose]);

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            <Button href="#" onClick={handleCloseClick} styleSheet={{ backgroundColor: 'transparent' }}>
              <Icon name="close" styleSheet={{ color: '#D0D6F9', height: '24px', width: '24px' }} viewBox={28}/>
            </Button>
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.nav`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: rgb(11, 13, 23, 0.04);
  backdrop-filter: blur(40.7742px);
  height:100%;
  width:100%;
  padding: 40px 30px;
`;

const StyledModalWrapper = styled.div`
  width: 67vw;
  height: 100%;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
