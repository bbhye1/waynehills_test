import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('./assets');

describe('HomePage', () => {
  function renderHomePage() {
    return render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  }

  it('renders Header', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Sign in');
  });

  it('renders SSV section', () => {
    const { container } = renderHomePage();

    const steps = ['Scripting', 'Matching videos', 'Encoding'];

    steps.forEach((step) => {
      expect(container).toHaveTextContent(step);
    });
  });

  it('renders Footer', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Terms of Use');
  });
});
