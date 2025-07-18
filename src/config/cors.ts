import { cors } from "hono/cors";

export const corsConfig = cors({
  origin: "*", // ✅ Allow all origins
  allowMethods: ["GET", "POST", "OPTIONS"], // include OPTIONS for preflight
  allowHeaders: ["Content-Type"],
  maxAge: 600,
  credentials: false, // ❗ must be false when using origin: "*"
});
