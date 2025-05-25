import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import BlogPost from './BlogPost';

describe('BlogPost page', () => {
  it('shows slug in heading', () => {
    window.scrollTo = () => {};
    render(
      <MemoryRouter initialEntries={[{ pathname: '/blog/test-post' }]}>\
        <Routes>
          <Route path="blog/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('test-post')).toBeInTheDocument();
  });
});
