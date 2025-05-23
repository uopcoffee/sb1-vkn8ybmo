import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll } from 'vitest';
import TestimonialCarousel from './TestimonialCarousel';

describe('TestimonialCarousel', () => {
  beforeAll(() => {
    class MockObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    global.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;
  });

  it('displays the testimonial quote', () => {
    render(<TestimonialCarousel />);
    expect(
      screen.getByText(
        /Ballast Financial transformed our financial operations\. Their expertise and guidance have been invaluable as we've scaled\./
      )
    ).toBeInTheDocument();
  });
});

