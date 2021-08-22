import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import IntroductionSection from './IntroductionSection';

jest.mock('./assets');

describe('IntroductionSection', () => {
  function renderIntroductionSection() {
    return render((
      <MemoryRouter>
        <IntroductionSection />
      </MemoryRouter>
    ));
  }

  it('renders slider', () => {
    const { container } = renderIntroductionSection();

    expect(container).toHaveTextContent('Text');
    expect(container).toHaveTextContent('To');
    expect(container).toHaveTextContent('Video');
  });
});
