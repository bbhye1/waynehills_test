import styled from '@emotion/styled';

import images from './assets';

import { styles } from '../designSystem';

const Container = styled.footer({});

const Top = styled.div({
  ...styles.center,
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: '40px',
  margin: '10px auto 0 auto',
  letterSpacing: '.0074em',
  textAlign: 'center',
  '& img': {
    display: 'block',
    margin: '20px auto',
  },
});

const Divider = styled.div({
  borderBottom: '1px solid #0000001f',
});

const Bottom = styled.div({
  ...styles.center,
  display: 'flex',
});

const TermsOfUse = styled.div({
  flexGrow: 1,
  flexBasis: 0,
  margin: '10px',
  '& button': {
    border: 0,
    letterSpacing: '.0179em',
    textDecoration: 'underline solid .2rem',
    background: '#fff',
    cursor: 'pointer',
  },
});

const Information = styled.div({
  flexGrow: 1,
  flexBasis: 0,
  margin: '10px',
  letterSpacing: '.0179em',
  '& span': {
    display: 'block',
    lineHeight: 1.45,
    margin: '0 0 12px',
  },
});

export default function Footer() {
  const handleClick = () => {
    // TODO: open Terms of Use modal
  };

  return (
    <Container>
      <Top>
        powered by
        <img
          src={images.shutterstockLogo}
          alt="Shutterstock logo"
        />
      </Top>
      <Divider />
      <Bottom>
        <TermsOfUse>
          <button
            type="button"
            onClick={handleClick}
          >
            Terms of Use
          </button>
        </TermsOfUse>
        <Information>
          <span>
            B1, E10Dong, 70, Magokjungang 10-ro,
            Gangseo-gu, Seoul, Republic of Korea
          </span>
          <span>Founder : John (Yi.su.min)</span>
          <span>Email : waynehills.ventures@gmail.com</span>
        </Information>
      </Bottom>
    </Container>
  );
}
