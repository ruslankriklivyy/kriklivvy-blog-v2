import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  it('header render', () => {
    render(<Home posts={[]} />);
    expect(screen.getByText('raven.web')).toBeTruthy();
  });
});
