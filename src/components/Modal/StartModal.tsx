import React from 'react';
import styled from 'styled-components';

interface StartTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const StartTestModal: React.FC<StartTestModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return <Backdrop />;
};

export default StartTestModal;
