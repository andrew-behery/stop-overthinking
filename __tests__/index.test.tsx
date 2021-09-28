import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from '../pages/index';
import Consideration from '../components/Consideration';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    // const about = screen.getByText('stop overthinking.');

    // expect(about).toBeInTheDocument();
  });

  it('renders a consideration', () => {
    render(<Consideration />);
  });
});
