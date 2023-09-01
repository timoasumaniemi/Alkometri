import { render, screen } from '@testing-library/react';
import Header from '../App';
import Content from '../App';


it('Header should display Hello Alkometri', () => {
  render(<Header />)
  expect(screen.getByText('Hello Alkometri')).toBeInTheDocument()
})

it('Content should have "Weight:" label', () => {
  render(<Content />)
  expect(screen.getByLabelText('Weight:')).toBeInTheDocument()
})

it('Content should have "Bottles:" label', () => {
  render(<Content />)
  expect(screen.getByLabelText('Bottles:')).toBeInTheDocument()
})