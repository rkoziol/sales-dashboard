import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.component';

describe('App Component', () => {
  test('renders the sales analytics title', () => {
    // when
    render(<App />);
    const titleElement = screen.getByText(/Sales Analytics/i);

    // then
    expect(titleElement).toBeInTheDocument();
  });
});