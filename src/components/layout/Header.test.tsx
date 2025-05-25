import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, afterEach } from 'vitest';
import Header from './Header';

describe('Header', () => {
  afterEach(() => {
    cleanup();
  });
  it('adds scrolled class on scroll', async () => {
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = document.querySelector('header') as HTMLElement;
    expect(header.className).not.toContain('shadow-sm');
    window.scrollY = 30;
    fireEvent.scroll(window);
    await waitFor(() => expect(header.className).toContain('shadow-sm'));
  });

  it('toggles mobile menu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    expect(screen.getAllByText('Schedule a consultation')).toHaveLength(1);
    fireEvent.click(toggle);
    expect(screen.getAllByText('Schedule a consultation')).toHaveLength(2);
    fireEvent.click(toggle);
    expect(screen.getAllByText('Schedule a consultation')).toHaveLength(1);
  });
});
