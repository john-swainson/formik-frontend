import { render, screen } from '@testing-library/react';
import Button from './Button';

test('it renders Button', () => {
  render(<Button>Test</Button>);
  const buttonElement = screen.getByText(/Test/i);
  expect(buttonElement).toBeInTheDocument();
});
