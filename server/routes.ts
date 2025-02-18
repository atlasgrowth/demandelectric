import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSchema.parse(req.body);
      const result = await storage.createContactSubmission({
        ...submission,
        submitted_at: new Date().toISOString()
      });
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid submission data" });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  const httpServer = createServer(app);
  return httpServer;
}
