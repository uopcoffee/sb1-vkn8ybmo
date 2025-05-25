import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Section from './Section';

describe('Section', () => {
  it('applies geometric-pattern class when pattern is true', () => {
    const { container } = render(<Section pattern>Content</Section>);
    const section = container.querySelector('section');
    expect(section).toHaveClass('geometric-pattern');
  });
});
