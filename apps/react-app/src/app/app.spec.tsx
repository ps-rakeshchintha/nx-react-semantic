import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title as', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome react-app/gi)).toBeTruthy();
  });
});
