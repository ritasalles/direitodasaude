import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Novo ID do Formspree fornecido pelo usuário: meevqvbw
    const formspreeResponse = await fetch('https://formspree.io/f/meevqvbw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        _subject: `NOVO CONTATO SITE: ${name}`,
      }),
    });

    if (formspreeResponse.ok) {
      return response.status(200).json({ success: true });
    } else {
      const errorData = await formspreeResponse.json();
      console.error('Formspree error:', errorData);
      return response.status(500).json({ error: 'Failed to send message via gateway' });
    }
  } catch (error) {
    console.error('Serverless function error:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}
