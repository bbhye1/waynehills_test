import { useState } from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '49px',
    bottom: '-10px',
    display: 'block',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#ffffff1f',
  },
});

const Form = styled.form({
  paddingLeft: '72px',
  '& textarea': {
    minHeight: '320px',
    minWidth: '640px',
    height: '100%',
    width: '100%',
    padding: '2rem',
    outline: 0,
    resize: 'none',
  },
});

const LetterCount = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '0 8px 0 0',
});

const Convert = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '8px 0 0 0',
});

const Button = styled.button(({ disabled }) => [{
  fontWeight: '500',
  lineHeight: '36px',
  marginRight: '5px',
  padding: '0 16px',
  minWidth: '64px',
  border: 0,
  borderRadius: '4px',
  boxShadow: '0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f',
  background: '#fff',
  color: '#000',
  outline: 0,
  cursor: 'pointer',
},
disabled ? {
  background: '#888',
  color: '#ffffff4d',
} : {},
]);

export default function Contents({ open }) {
  const [text, setText] = useState('');
  const [valid, isValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: convert text to video
  };

  const handleChange = (e) => {
    setText(e.target.value);

    if (text.length >= 500) {
      isValid(true);
      return;
    }

    isValid(false);
  };

  if (!open) {
    return ((
      <Wrapper />
    ));
  }

  return ((
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <textarea
          id="script"
          placeholder="Put your script here 500~5,000 letters."
          value={text}
          onChange={handleChange}
        />
        <LetterCount>
          {text.length}
          {' '}
          letters
        </LetterCount>
        <Convert>
          <Button
            type="submit"
            disabled={!valid}
          >
            Convert
          </Button>
        </Convert>
      </Form>
    </Wrapper>
  ));
}
