import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import images from './assets';

const Container = styled.header({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '8px auto',
  padding: '8px',
  maxWidth: '1260px',
  boxShadow: '0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f',
});

const Logo = styled.div({
  maxHeight: '42px',
  filter: 'invert(1)',
  '& img': {
    maxHeight: '42px',
  },
});

const Button = styled.button({
  fontWeight: '500',
  lineHeight: '36px',
  marginRight: '5px',
  padding: '0 16px',
  minWidth: '64px',
  border: 0,
  borderRadius: '4px',
  boxShadow: '0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f',
  background: '#000',
  color: '#fff',
  outline: 0,
  cursor: 'pointer',
});

export default function Header() {
  const handleClick = () => {
    // todo: open sign in modal
  };

  return (
    <Container>
      <Logo>
        <Link to="/ttv/home">
          <img src={images.logo} alt="logo" />
        </Link>
      </Logo>
      <Button
        type="button"
        onClick={handleClick}
      >
        Sign in
      </Button>
    </Container>
  );
}
