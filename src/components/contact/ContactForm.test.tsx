import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ContactForm from './ContactForm';

afterEach(() => {
  cleanup();
});

describe('ContactForm', () => {
  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />);
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(4);
  });

  it('submits form and displays toast', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'a@example.com' } });
    fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Acme' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });

    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await screen.findByText(/message sent successfully/i);
    expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.any(Object));
  });
});
