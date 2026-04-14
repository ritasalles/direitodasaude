import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }

  try {
    const notificationResponse = await fetch('https://formspree.io/f/meevqvbw', {
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
        _replyto: email,
        _language: 'pt-BR',
        _template: 'basic',
        _autoresponse: `Prezado(a),\n\nAgradecemos o seu contato. Sua mensagem foi recebida e será analisada com a devida atenção por nossa equipe.\n\nEm breve, retornaremos para dar andamento à sua solicitação.\n\nPermanecemos à disposição.\n\nCordialmente,\nRita Salles Advocacia e Consultoria Jurídica`
      }),
    });

    if (notificationResponse.ok) {
      return response.status(200).json({ 
        success: true, 
        message: 'Mensagem processada com sucesso.' 
      });
    } else {
      return response.status(502).json({ error: 'Falha na comunicação com o gateway de e-mail' });
    }
  } catch (error) {
    return response.status(500).json({ error: 'Erro interno no processamento do e-mail' });
  }
}
