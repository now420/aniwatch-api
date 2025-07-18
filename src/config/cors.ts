import { cors } from "hono/cors";
import { env } from "./env.js";

const DEFAULT_ALLOWED_ORIGINS = ["http://localhost:4000", "*"];

const allowedOrigins = env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
    ? env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
    : DEFAULT_ALLOWED_ORIGINS;

export const corsConfig = cors({
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: true,
    origin: (origin) => {
        if (!origin) return ""; // disallow if origin is undefined
        if (allowedOrigins.includes("*")) return "*"; // allow all
        if (allowedOrigins.includes(origin)) return origin; // allow listed
        return ""; // disallow
    },
});
