import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, whatsapp, email, plan } = req.body;

  if (!name || !whatsapp || !email || !plan) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  const evolutionUrl = process.env.EVOLUTION_API_URL;
  const instance = process.env.EVOLUTION_INSTANCE;
  const apiKey = process.env.EVOLUTION_API_KEY;
  const destination = process.env.LEAD_WHATSAPP;

  const message =
    `🚀 *Novo Lead - Plano ${plan}*\n\n` +
    `👤 *Nome:* ${name}\n` +
    `📱 *WhatsApp:* ${whatsapp}\n` +
    `📧 *E-mail:* ${email}`;

  const response = await fetch(`${evolutionUrl}/message/sendText/${instance}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey!,
    },
    body: JSON.stringify({
      number: destination,
      text: message,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return res.status(500).json({ error: "Falha ao enviar mensagem", detail: error });
  }

  return res.status(200).json({ ok: true });
}
