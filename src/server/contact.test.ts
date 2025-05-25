import { describe, it, expect } from 'vitest';
import handler from './contact';

const payload = {
  name: 'Alice',
  email: 'alice@example.com',
  company: 'Acme',
  message: 'Hello',
};

describe('contact handler', () => {
  it('returns success for valid POST', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const res = await handler(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ success: true });
  });

  it('rejects non-POST methods', async () => {
    const req = new Request('http://localhost/api/contact', { method: 'GET' });
    const res = await handler(req);
    expect(res.status).toBe(405);
  });

  it('returns bad request on invalid JSON', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: 'not-json',
    });
    const res = await handler(req);
    expect(res.status).toBe(400);
  });
});
