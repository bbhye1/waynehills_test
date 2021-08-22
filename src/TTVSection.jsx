import styled from '@emotion/styled';

import Contents from './Contents';

import { styles } from '../designSystem';

import images from './assets';

const Top = styled.div({
  transform: 'translateY(1px)',
  lineHeight: 0.5,
});

const StepsContainer = styled.div({
  background: '#000',
  color: '#fff',
});

const Steps = styled.div({
  ...styles.center,
  display: 'flex',
  flexDirection: 'column',

});

const Step = styled.div({
  fontWeight: 500,
  '& span': {
    display: 'inline-block',
    lineHeight: '24px',
    margin: '0 12px 0',
    width: '24px',
    borderRadius: '50%',
    textAlign: 'center',
    background: '#d7ccc8',
    color: '#000000de',
  },
});

const Title = styled.div({
  padding: '24px',
});

const Bottom = styled.div({
  lineHeight: 0.5,
  transform: 'scaleY(-1) translateY(1px)',
});

export default function TTVSection({ onOpenSignIn }) {
  const steps = [
    {
      step: 1,
      title: 'Scripting',
      open: true,
    },
    {
      step: 2,
      title: 'Matching videos',
      open: false,
    },
    {
      step: 3,
      title: 'Encoding',
      open: false,
    },
  ];

  return (
    <>
      <Top>
        <img
          src={images.stepsWrapper}
          alt="steps wrapper"
        />
      </Top>
      <StepsContainer>
        <Steps>
          {steps.map(({
            step, title, open,
          }) => ((
            <Step key={title}>
              <Title>
                <span>{step}</span>
                {title}
              </Title>
              <Contents
                open={open}
                onOpenSignIn={onOpenSignIn}
              />
            </Step>
          )))}
        </Steps>
      </StepsContainer>
      <Bottom>
        <img
          src={images.stepsWrapper}
          alt="steps wrapper"
        />
      </Bottom>
    </>
  );
}
