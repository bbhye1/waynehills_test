import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Contents from './Contents';

jest.mock('./assets');

describe('Contents', () => {
  function renderContents() {
    return render((
      <MemoryRouter>
        <Contents open={given.open} />
      </MemoryRouter>
    ));
  }
  context('when open is true', () => {
    given('open', () => true);

    it('renders text area and letter count message', () => {
      const { queryByPlaceholderText, container } = renderContents();

      expect(queryByPlaceholderText('Put your script here 500~5,000 letters.'))
        .not.toBeNull();
      expect(container).toHaveTextContent('letters');
    });

    it('renders convert button', () => {
      const { queryByText } = renderContents();

      expect(queryByText('Convert')).not.toBeNull();
    });
  });
});
