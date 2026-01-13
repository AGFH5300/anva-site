import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello World" });
  });

  return httpServer;
}
