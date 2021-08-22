import styled from '@emotion/styled';

import Slider from './Slider';

import images from './assets';

import { styles } from '../designSystem';

const Container = styled.section({
  ...styles.center,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  overflow: 'hidden',
});

const Divider = styled.div({
  display: 'inline-flex',
  border: '1px solid #0000001f',
  borderRightColor: '#fff',
  margin: '0 40px',
});

const Introduction = styled.h1({
  display: 'inline-flex',
  fontWeight: '500',
  fontSize: '92px',
  lineHeight: 1,
  letterSpacing: '-.0124em',
  margin: '50px 0',
  minWidth: '680px',
});

export default function IntroductionSection() {
  const sliderItems = [
    {
      title: 'Text',
      contents: images.icons.text,
    },
    {
      title: 'To',
      contents: images.icons.rightArrow,
    },
    {
      title: 'Video',
      contents: images.icons.video,
    },
  ];

  return (
    <Container>
      <Slider
        delay={1000}
        sliderItems={sliderItems}
      />
      <Divider />
      <Introduction>The easiest way to make videos</Introduction>
    </Container>
  );
}
