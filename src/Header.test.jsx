import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

jest.mock('./assets');

describe('Header', () => {
  function renderHeader() {
    return render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));
  }

  it('renders Logo', () => {
    const { getByAltText } = renderHeader();

    expect(getByAltText('logo')).not.toBeNull();
  });

  it('renders sign in button', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('Sign in');
  });
});
