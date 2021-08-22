import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Slider from './Slider';

jest.mock('./assets');

describe('Slider', () => {
  const sliderItems = [{
    title: 'Text',
  },
  {
    title: 'To',
  },
  {
    title: 'Video',
  }];

  function renderSlider() {
    return render((
      <MemoryRouter>
        <Slider
          delay={1}
          sliderItems={sliderItems}
        />
      </MemoryRouter>
    ));
  }

  it('renders slider tabs', () => {
    const { container } = renderSlider();

    sliderItems.forEach(({ title }) => {
      expect(container).toHaveTextContent(title);
    });
  });
});
