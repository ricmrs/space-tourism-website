import React, { createRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

function Modal({ onClose, children, title }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  const backDropHandler = (e: MouseEvent) => {
    if (modalWrapperRef.current === null) return;
    if (!modalWrapperRef?.current?.contains(e.target as Node)) {
      onClose();
    }
  }

  useEffect(() => {
    setIsBrowser(true);

    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>
          <StyledModalHeader>
            <Button href="#" onClick={handleCloseClick}>
              x
            </Button>
          </StyledModalHeader>
          {title}
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

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  height:100%;
  width:100%;
  border-radius: 15px;
  padding: 15px;
`;

const StyledModalWrapper = styled.div`
  width: 500px;
  height: 600px;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
