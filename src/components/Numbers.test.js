import React from 'react';
import { render, screen } from '@testing-library/react';
import Numbers from './Numbers';

describe('Numbers', () => {
  it('renders Numbers component', () => {
    render(<Numbers />);
    expect(screen.getByTestId('numbers-container')).toBeInTheDocument();
  });
});
