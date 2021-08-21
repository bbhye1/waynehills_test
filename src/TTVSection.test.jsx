import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TTVSection from './TTVSection';

jest.mock('./assets');

describe('TTVSection', () => {
  function renderTTVSection() {
    return render((
      <MemoryRouter>
        <TTVSection />
      </MemoryRouter>
    ));
  }
  it('renders steps', () => {
    const steps = [
      { step: 1, title: 'Scripting' },
      { step: 2, title: 'Matching videos' },
      { step: 3, title: 'Encoding' },
    ];

    const { container } = renderTTVSection();

    steps.forEach(({ step, title }) => {
      expect(container).toHaveTextContent(step);
      expect(container).toHaveTextContent(title);
    });
  });

  it('renders Contents', () => {
    const { container } = renderTTVSection();

    expect(container).toHaveTextContent('Convert');
  });
});
