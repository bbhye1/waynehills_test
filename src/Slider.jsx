import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  maxWidth: '800px',
  minWidth: '480px',
  textAlign: 'center',
  overflow: 'hidden',
});

const SliderTabList = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  borderBottom: '1px solid #d7ccc8',
});

const TabItem = styled.div({
  flex: 1,
  fontWeight: '500',
  lineHeight: '48px',
  height: '48px',
  padding: '0 24px',
  minWidth: '160px',
  cursor: 'pointer',
});

const CurrentTabBar = styled.div(({ step }) => ({
  position: 'absolute',
  bottom: 0,
  width: '160px',
  height: '2px',
  background: '#d7ccc8',
  transform: `translate3d(${step * 100}%, 0, 0)`,
  transition: 'ease 1s',
}));

const Contents = styled.div({
  position: 'abolute',
  display: 'flex',
  justifyContent: 'center',
  width: '1500px',
});

const ContentsItem = styled.div(({ step }) => ({
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '700px',
  height: '200px',
  background: '#fff',
  transform: `translate3d(${-step * 100}%, 0, 0)`,
  transition: 'ease 1s',
  '& img': {
    height: '70%',
  },
}));

export default function Slider({ delay, sliderItems }) {
  const [step, setStep] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        const nextIndex = step === sliderItems.length - 1
          ? 0
          : step + 1;
        setStep(nextIndex);
      },
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [step]);

  const handleClickSlideTab = (i) => {
    setStep(i);
  };

  return (
    <Container>
      <SliderTabList>
        {sliderItems
          .map(({ title }, i) => ((
            <TabItem
              key={title}
              step={step}
              onClick={() => handleClickSlideTab(i)}
            >
              {title}
            </TabItem>
          )))}
        <CurrentTabBar step={step} />
      </SliderTabList>
      <Contents>
        {sliderItems
          .map(({ title, contents }) => ((
            <ContentsItem
              key={title}
              step={step}
            >
              <img
                src={contents}
                alt={title}
              />
            </ContentsItem>
          )))}
      </Contents>
    </Container>
  );
}
