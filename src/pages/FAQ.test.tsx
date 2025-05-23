import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import FAQ from './FAQ';

describe('FAQ page', () => {
  it('renders heading', () => {
    window.scrollTo = () => {};
    render(<FAQ />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });
});
