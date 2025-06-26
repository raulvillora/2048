import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import Game from './Game';
import LandingPage from './LandingPage';
import Numbers from './Numbers';

describe('Component smoke tests', () => {
  test('Dashboard renders a 4x4 grid', () => {
    const dashboard = [
      [2, 0, 0, 2],
      [0, 4, 0, 0],
      [0, 0, 8, 0],
      [0, 0, 0, 16],
    ];
    render(<Dashboard dashboard={dashboard} />);
    expect(screen.getAllByRole('cell').length).toBe(16);
  });

  test('Game renders New Game button and score', () => {
    render(<Game />);
    expect(screen.getByText(/New Game/i)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('LandingPage renders welcome text', () => {
    render(<LandingPage handleLandingPageClick={() => {}} />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  test('Numbers renders number or empty', () => {
    const { rerender } = render(<Numbers numberName="n2" numberNamePrint={2} />);
    expect(screen.getByText('2')).toBeInTheDocument();
    rerender(<Numbers numberName="n0" numberNamePrint={0} />);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
