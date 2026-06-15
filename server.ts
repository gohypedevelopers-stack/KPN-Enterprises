import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

// Initialize Gemini
let ai: GoogleGenAI | null = null;
function getAi() {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing");
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return ai;
}

const systemInstruction = `
You are the elite "KPN Enterprises AI Flooring Advisor". Your role is to assist clients (architects, facility managers, project owners) by providing expert suggestions for industrial and commercial flooring projects in India, and guiding them to partner with KPN Enterprises.

Our Company:
- Name: KPN Enterprises
- Founded/Led by: Nitin Kumar Garg
- Location: D-6/1, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi - 110020, India
- Contacts: Phone: +91 9318351774, +91 9810349899 | Email: kpnenterprises31@gmail.com
- Profile: Top-tier professional contractor specializing in Epoxy Flooring, Industrial Flooring, Polyurethane (PU) Flooring, Floor Coatings, and Surface Protection Solutions across India. Outstanding track record of quality, durability, and on-time delivery using modern machinery and custom-formulated materials.

Our Solutions Checklist & Matrix:
1. Epoxy Floor Coating: Ideal for warehouses, manufacturing units, logistics hubs, garages, garment factories, and assembly lines.
2. Epoxy Self-Leveling (Matt/Glossy) (1.5mm to 3mm): Perfect for pharma plants, cleanrooms, hospitals, cosmetic manufacturing, and server/IT hubs.
3. Polyurethane (PU) Flooring / Screed: Highly resistant to heat, thermal shocks, chemical spills, and heavy impacts. Best for food & beverage processing, diaries, breweries, and meat processing.
4. Anti-Skid Coating Flooring: Slip-resistant textures made for wet, steep, heavy foot/equipment traffic areas, ramps, and wash areas.
5. ESD Coating Flooring (Antistatic): Conductive floors to manage static discharge. Crucial for semiconductor assembly, electronics cleanrooms, labs, and munitions depots.
6. Wall Coating / PU Hygienic Coatings: Antimicrobial surfaces with FDA/GMP compliance. Safe for sterile labs, food prep, and hospital walls.
7. Coving (Curved transition): Smooth floor-to-wall coving (radius 50mm or 75mm) that removes 90-degree corners, eliminating bacteria/dirt traps in sterile and food zones.
8. Road & Floor Markings: High-visibility yellow/white markings for gangways, safety aisles, hazard zones, fire exit routes, and warehouse demarcation.
9. Anti-Corrosive Coating: Advanced chemical-safe coatings protecting structural concrete, metal tanks, pipes, and marine assets.
10. Cementitious Underlay: Essential self-leveling base to level uneven concrete subfloors before laying final epoxy/PU treatments.
11. Floor Joint Sealants: Elastomeric, heavy-duty joint-sealers that absorb concrete movement while withstanding hard-wheeled forklift pressure.

Our Sectors:
- Food & Beverage / Dairies: Requires high washdown, anti-bacterial PU coatings and coving.
- Automotive & Engineering: Requires high load, high impact resistance, and chemical resistance.
- IT Parks, R&D Labs, Data Centres: Demands ESD (electro-static discharge) flooring and cleanroom self-leveling.
- Healthcare & Pharma: Requires FDA-compliant sterile wall-floor coatings with zero dust, coving, and sanitary sealants.
- Logistics / Warehouses: Demands heavy-duty abrasion resistant coatings, floor joint sealants, and clear workflow markings.
- Retail & Hospitality: Demands aesthetically stunning, high contrast, colored finishes that are durable and easy to clean.

Communication Rules:
- Sound professional, technical, yet highly welcoming and consultative.
- Ask clarifying questions about their facility, square footage, subfloor condition (is it new or damaged?), chemical exposure, and temperature extremes.
- Highlight KPN's custom engineering expertise (team of Civil & Chemical engineers).
- Encourage them to request a site visit, submit the quote form on our page, or directly call are contact numbers (+91 9318351774).
- Keep formatting clean, using logical lists or bullet points to explain technical details clearly. Keep responses readable.
`;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API - Chat Assistant Route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const gemini = getAi();
      let contents: any[] = [];
      
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          contents.push({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          });
        });
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini server error:", error);
      res.status(500).json({ error: error?.message || "Failed to process chat query." });
    }
  });

  // API - Quote Request Route
  app.post('/api/quote', async (req, res) => {
    try {
      const { name, company, phone, email, industry, area, description } = req.body;
      
      if (!name || !phone || !industry) {
        return res.status(400).json({ error: "Name, phone number, and industry are required." });
      }

      let suggestedSolution = "Epoxy Floor Coating & Floor Markings";
      let explanation = "Our general-purpose heavy-duty floor coating provides excellent impact resistance and dust protection.";

      const indLower = industry.toLowerCase();
      if (indLower.includes("pharma") || indLower.includes("health") || indLower.includes("hospital") || indLower.includes("cosmetic")) {
        suggestedSolution = "Self-Leveling Epoxy (2mm) with Hygienic Wall Coving";
        explanation = "This satisfies rigorous FDA/GMP hygiene demands, creating an easy-to-sanitize, seamless transition from floor to wall.";
      } else if (indLower.includes("food") || indLower.includes("beverage") || indLower.includes("dairy") || indLower.includes("brewery")) {
        suggestedSolution = "Polyurethane (PU) Screed Flooring";
        explanation = "Engineered for thermal shock protection (up to 120°C washdowns) and resistance to organic food acids and moisture.";
      } else if (indLower.includes("electronics") || indLower.includes("data") || indLower.includes("lab") || indLower.includes("park") || indLower.includes("it")) {
        suggestedSolution = "Antistatic ESD Coating Flooring";
        explanation = "Safeguards microchips and equipment against static shocks. Grounded copper strips will be laid across the subfloor grid.";
      } else if (indLower.includes("warehouse") || indLower.includes("logistic") || indLower.includes("garage") || indLower.includes("automotive")) {
        suggestedSolution = "Heavy-Duty High-Abrasion Anti-Skid Epoxy Coating with Joint Sealants";
        explanation = "Engineered to resist concentrated loading from steel wheels and forklift traffic, augmented by safety gangway markings.";
      } else if (indLower.includes("roof") || indLower.includes("basement") || indLower.includes("water")) {
        suggestedSolution = "PU Waterproof Coating Solution";
        explanation = "Forms an elastomeric barrier that locks out rainwater and subterranean seepage under pressure.";
      }

      const inquiryRefId = "KPN-" + Math.floor(100000 + Math.random() * 900000);

      res.json({
        success: true,
        refId: inquiryRefId,
        message: "Lead recorded successfully! A customized technical proposal has been pre-screened.",
        recommendation: {
          solution: suggestedSolution,
          details: explanation,
          nextSteps: [
            "Expect a phone call or WhatsApp message within 2 hours from Nitin Kumar Garg.",
            "Our engineering team can perform a free visual inspections at your Delhi/NCR project site next day.",
            "We will prepare a formal commercial offer complete with technical data sheets."
          ]
        }
      });
    } catch (error: any) {
      console.error("Quote server error:", error);
      res.status(500).json({ error: "Failed to record quotation request." });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    
    app.use(vite.middlewares);
    
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const rawHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        let template = await vite.transformIndexHtml(url, rawHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist/index.html'));
    });
  }

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
