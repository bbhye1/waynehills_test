import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scale = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Overlay = styled.div(({ visible }) => ({
  zIndex: 1000,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '#00000052',
  opacity: visible ? 1 : 0,
  visibility: visible ? 'visible' : 'hidden',
  transition: '.2s',
  overflowY: 'auto',
}));

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  minHeight: '100%',
});

const Dialog = styled.div(({ visible }) => ({
  margin: 'auto',
  padding: '24px',
  paddingTop: '2em',
  paddingBottom: '2em',
  borderRadius: '4px',
  background: '#fff',
  boxShadow: '0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f',
  animation: visible ? `${scale} 0.2s ease-out` : 'none',
  transition: '.3s',
}));

export default function Modal({
  children, open, onClickOutside,
}) {
  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
    }
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <Overlay
      role="dialog"
      visible={open}
      onClick={handleClickOutside}
    >
      <Content>
        <Dialog
          visible={open}
          onClick={handleClickInside}
        >
          {children}
        </Dialog>
      </Content>
    </Overlay>
  );
}
