import { useState } from 'react';

import styled from '@emotion/styled';

import Modal from './Modal';

const Form = styled.div({
  fontWeight: '500',
  lineHeight: '32px',
  letterSpacing: 0.0075,
});

const Field = styled.div({
  position: 'relative',
  paddingBottom: '1em',
  width: '360px',
  letterSpacing: 1.5,
  color: '#0000006b',
});

const Label = styled.label(({ focus }) => [{
  position: 'absolute',
},
focus ? {
  transform: 'translate3d(0, -20px, 0) scale(0.7)',
  transformOrigin: 'left center',
  transition: '.3s',
} : {
  transition: '.3s',
},
]);

const Input = styled.input({
  fontWeight: '400',
  lineHeight: '28px',
  margin: '0 0 16px',
  width: '100%',
  border: 0,
  borderBottom: '1px solid #0000006b',
  letterSpacing: 0.0094,
  outline: 0,
});

const Button = styled.button({
  fontWeight: '500',
  lineHeight: '36px',
  marginRight: '5px',
  width: '100%',
  border: 0,
  borderRadius: '4px',
  boxShadow: '0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f',
  background: '#000',
  color: '#fff',
  outline: 0,
  cursor: 'pointer',
});

export default function SignIn({ open, onClickOutside }) {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseModal = () => {
    onClickOutside();
  };

  const handleEmailBlur = () => {
    if (email.length) {
      return;
    }
    setEmailFocus(false);
  };

  const handlePasswordBlur = () => {
    if (password.length) {
      return;
    }
    setpasswordFocus(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Modal
      open={open}
      onClickOutside={handleCloseModal}
    >
      <Form>
        <Field>
          <Label
            htmlFor="email"
            focus={emailFocus}
          >
            Email
          </Label>
          <Input
            type="text"
            id="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={handleEmailBlur}
            onChange={handleChangeEmail}
          />
        </Field>
        <Field>
          <Label
            htmlFor="password"
            focus={passwordFocus}
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            onFocus={() => setpasswordFocus(true)}
            onBlur={handlePasswordBlur}
            onChange={handleChangePassword}
          />
        </Field>
        <Button
          onClick={handleCloseModal}
        >
          Login
        </Button>
      </Form>
    </Modal>
  );
}
