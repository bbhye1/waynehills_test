import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('./assets');

describe('HomePage', () => {
  it('renders Header', () => {
    const { container } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Sign in');
  });
});
