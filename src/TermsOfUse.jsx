import styled from '@emotion/styled';

import Modal from './Modal';

const Title = styled.h2({
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '32px',
  letterSpacing: 0.0075,
  margin: '0 0 16px',
});

const SubTitle = styled.h3({
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '28px',
  letterSpacing: 0.0094,
  margin: '0 0 16px',
});

const Contents = styled.p({
  width: '77vw',
  maxWidth: '80vw',
  margin: '0 0 12px',
  '& span': {
    display: 'block',
  },
});

const Bottom = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '8px 0',
});

const Button = styled.button({
  fontWeight: '500',
  padding: '.5rem 1rem',
  border: 0,
  background: '#fff',
  outline: 0,
  cursor: 'pointer',
});

export default function SignIn({ open, onClickOutside }) {
  const handleCloseModal = () => {
    onClickOutside();
  };

  return (
    <Modal
      open={open}
      onClickOutside={handleCloseModal}
    >
      <Title>Terms of Use</Title>
      <SubTitle>Shutterstock</SubTitle>
      <Contents>
        <span>
          ● Content is for digital use within Wayne Hills Ventures only
          and may not be used for printing.
        </span>
        <span>● You may not use the content as a trademark for a business.</span>
        <span>
          ● You may not portray a person in a way that may be offensive,
          including: in connection with adult-oriented services or ads for dating services;
        </span>
        <span>
          in connection with the promotion of tobacco products;
          in connection with political endorsements;
          with pornographic, defamatory, unlawful, offensive or immoral content;
        </span>
        <span>
          and as suffering from, or being treated for, a physical or mental ailment.
        </span>
        <span>
          ● You may only use the content in campaigns and content created on Wayne Hills Ventures,
          and not with other website or content services.
        </span>
      </Contents>
      <Bottom>
        <Button
          onClick={handleCloseModal}
        >
          Got it!
        </Button>
      </Bottom>
    </Modal>
  );
}
