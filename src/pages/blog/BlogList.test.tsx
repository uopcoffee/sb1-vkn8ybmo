import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import BlogList from './BlogList';

describe('BlogList page', () => {
  it('lists blog posts', () => {
    window.scrollTo = () => {};
    render(
      <MemoryRouter>
        <BlogList />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to the Ballast Blog')).toBeInTheDocument();
    expect(screen.getByText('Do You Need an Outsourced CFO?')).toBeInTheDocument();
  });
});
