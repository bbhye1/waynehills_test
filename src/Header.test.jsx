import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

jest.mock('./assets');

describe('Header', () => {
  const handleClick = jest.fn();

  function renderHeader() {
    return render((
      <MemoryRouter>
        <Header onOpenSignIn={handleClick} />
      </MemoryRouter>
    ));
  }

  it('renders Logo', () => {
    const { getByAltText } = renderHeader();

    expect(getByAltText('logo')).not.toBeNull();
  });

  it('renders sign in button and listens click event', () => {
    const { getByText } = renderHeader();

    fireEvent.click(getByText('Sign in'));

    expect(handleClick).toBeCalled();
  });
});
