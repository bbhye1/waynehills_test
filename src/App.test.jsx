import { render } from '@testing-library/react';

import App from './App';

jest.mock('./assets');

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
