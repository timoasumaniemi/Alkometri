import { render, screen } from '@testing-library/react';
import App from '../App';

it('Renders Hello Alkometri', () => {
  render(<App />)
  expect(screen.getByText('Hello Alkometri')).toBeInTheDocument()
})
