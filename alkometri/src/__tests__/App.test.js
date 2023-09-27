import { render, screen } from '@testing-library/react';
import Header from '../App';
import Content from '../App';

it('Header should display Hello Alkometri', () => {
  render(<Header />)
  expect(screen.getByText('Alkometri 1.0')).toBeInTheDocument()
})

it('Content should have "Weight:" label', () => {
  render(<Content />)
  expect(screen.getByLabelText('Weight:')).toBeInTheDocument()
})

it('Content should have "Bottles:" label', () => {
  render(<Content />)
  expect(screen.getByLabelText('Bottles:')).toBeInTheDocument()
})

it('Content should have "Time:" label', () => {
  render(<Content />)
  expect(screen.getByLabelText('Time:')).toBeInTheDocument()
})

it('Content should have "Gender: " text', () => {
  render(<Content />)
  expect(screen.getByText('Gender:')).toBeInTheDocument()
})

it('Bottles input should have number type', () => {
  render(<Content />)
  const bottlesInput = screen.getByLabelText('Bottles:')
  expect(bottlesInput.getAttribute("type")).toBe("number")
})

it('Time input should have number type', () => {
  render(<Content />)
  const timeInput = screen.getByLabelText('Time:')
  expect(timeInput.getAttribute("type")).toBe("number")
})

it('Gender selectors should have male and female ids', () => {
  render(<Content />)
  const maleSelector = screen.getByText('Male')
  const femaleSelector = screen.getByText('Female')
  expect(maleSelector).toBeInTheDocument()
  expect(femaleSelector).toBeInTheDocument()
})
