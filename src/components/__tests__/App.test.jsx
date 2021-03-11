import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('has correct welcome text', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Hi There from React');
});
