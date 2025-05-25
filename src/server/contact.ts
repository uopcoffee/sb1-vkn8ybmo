export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function sendEmail(data: ContactPayload): Promise<void> {
  // Placeholder for email sending logic
  console.log('Email sent', data);
}

export default async function contactHandler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const data = (await req.json()) as ContactPayload;
    await sendEmail(data);
    return Response.json({ success: true });
  } catch {
    return new Response('Bad Request', { status: 400 });
  }
}
