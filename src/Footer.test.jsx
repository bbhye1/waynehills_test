import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

jest.mock('./assets');

describe('Footer', () => {
  function renderFooter() {
    return render((
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ));
  }

  it('renders Terms of Use button', () => {
    const { container } = renderFooter();

    expect(container).toHaveTextContent('Terms of Use');
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
