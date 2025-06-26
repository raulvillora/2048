import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
  it('renders New Game button', () => {
    render(<Game />);
    expect(screen.getByText(/new game/i)).toBeInTheDocument();
  });
});
