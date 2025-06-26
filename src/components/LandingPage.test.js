import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders Play button', () => {
    render(<LandingPage />);
    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });
});
