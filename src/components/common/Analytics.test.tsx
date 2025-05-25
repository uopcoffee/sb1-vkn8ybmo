import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, afterEach } from 'vitest';

const originalEnv = { ...import.meta.env };

async function loadComponent(enabled: string) {
  process.env.VITE_ENABLE_ANALYTICS = enabled;
  Object.assign(import.meta, { env: { ...originalEnv, VITE_ENABLE_ANALYTICS: enabled } });
  const mod = await import(`./Analytics?enabled=${enabled}`);
  return mod.default;
}

afterEach(() => {
  cleanup();
  document.querySelectorAll('script[data-domain]').forEach((s) => s.remove());
  Object.assign(import.meta, { env: { ...originalEnv } });
});

describe('Analytics', () => {
  it('injects script when enabled', async () => {
    const Analytics = await loadComponent('true');
    render(<Analytics />);
    expect(document.querySelector('script[data-domain="ballastfinancial.com"]')).not.toBeNull();
  });

  it('does nothing when disabled', async () => {
    const Analytics = await loadComponent('false');
    render(<Analytics />);
    expect(document.querySelector('script[data-domain="ballastfinancial.com"]')).toBeNull();
  });
});
