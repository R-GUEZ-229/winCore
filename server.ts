import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("ERREUR: GEMINI_API_KEY manquante.");
        return res.status(500).json({ error: 'Configuration serveur incomplète (API Key)' });
      }

      const ai = new GoogleGenAI({ apiKey });

      const history = messages.slice(0, -1).map((m: any) => ({
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

      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7, 
        },
        history: history
      });

      const result = await chat.sendMessageStream({ message: lastMessage });
      
      for await (const chunk of result) {
        const text = chunk.text;
        if (text) {
          res.write(text);
        }
      }
      res.end();
    } catch (error: any) {
      console.error('API Handler Error:', error);
      if (!res.headersSent) {
          res.status(500).json({ error: error.message });
      } else {
          res.write("\n\n[Erreur système: Connexion au noyau Corey instable. Veuillez réessayer.]");
          res.end();
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
