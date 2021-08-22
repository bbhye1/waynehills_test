import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

jest.mock('./assets');

describe('Footer', () => {
  const handleClick = jest.fn();

  function renderFooter() {
    return render((
      <MemoryRouter>
        <Footer
          onOpenTermsOfUse={handleClick}
        />
      </MemoryRouter>
    ));
  }

  it('renders Terms of Use button and listens click event', () => {
    const { getByText } = renderFooter();

    fireEvent.click(getByText('Terms of Use'));

    expect(handleClick).toBeCalled();
  });

  it('renders company informations', () => {
    const informations = [
      'B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic of Korea',
      'Founder : John (Yi.su.min)',
      'Email : waynehills.ventures@gmail.com',
    ];

    const { container } = renderFooter();

    informations.forEach((information) => {
      expect(container).toHaveTextContent(information);
    });
  });
});
