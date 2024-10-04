import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/String Calculator/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders calculate button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Calculate/i);
  expect(buttonElement).toBeInTheDocument();
});