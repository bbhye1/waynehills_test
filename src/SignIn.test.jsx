import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TermsOfUse from './TermsOfUse';

jest.mock('./assets');

describe('TermsOfUse', () => {
  const handleCloseModal = jest.fn();

  function renderTermsOfUse() {
    return render((
      <MemoryRouter>
        <TermsOfUse
          open={given.open}
          onClickOutside={handleCloseModal}
        />
      </MemoryRouter>
    ));
  }

  context('when open is true', () => {
    given('open', () => true);

    it('renders title and subtitle', () => {
      const { container } = renderTermsOfUse();

      expect(container).toHaveTextContent('Terms of Use');
      expect(container).toHaveTextContent('Shutterstock');
    });

    it('renders close button and listens click event', () => {
      const { getByText } = renderTermsOfUse();

      fireEvent.click(getByText('Got it!'));

      expect(handleCloseModal).toBeCalled();
    });
  });

  context('when open is false', () => {
    given('open', () => false);

    it('makes content hidden', () => {
      const { getByText } = renderTermsOfUse();

      expect(getByText('Got it!')).not.toBeVisible();
    });
  });
});
