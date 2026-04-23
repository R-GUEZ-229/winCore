import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge', // Explicitly use Edge runtime for streaming
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const messages = body.messages;
    
    // IMPORTANT: Make sure this is added to Vercel Environment Variables
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

    if (!apiKey) {
      console.error("ERREUR: GEMINI_API_KEY manquante.");
      return new Response(JSON.stringify({ error: 'Configuration serveur incomplète (API Key manquante sur Vercel)' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format for Gemini History
    const history = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const lastMessage = messages[messages.length - 1].content;

    const systemInstruction = `
      Ton nom est Corey, l'assistant cybernétique de WinCore Tech. 
      Ton créateur est Zadeck Hexmoor.
      Ton ton doit être futuriste, intelligent, professionnel et serviable.
      Tu es un expert en solutions informatiques (Windows, Office, Adobe, Déblocage mobile).
      Réponds exclusivement en français.
      Oriente toujours les utilisateurs vers WhatsApp (+229 01 93 42 84 16) pour finaliser un achat ou une intervention.
      Sois concis et évite les longs paragraphes inutiles.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, 
      },
      history: history
    });

    const result = await chat.sendMessageStream({ message: lastMessage });

    // Stream the response back
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Gemini Stream Error:", error);
          controller.enqueue(new TextEncoder().encode("\n\n[Erreur système: Connexion au noyau Corey instable. Veuillez réessayer.]"));
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('API Handler Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
