import express from "express";
import path from "path";
import cors from "cors";
import chatRoutes from './routes/chatRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'

import { serve } from "inngest/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import {clerkMiddleware} from '@clerk/express'

const app = express();
const __dirname = path.resolve();

app.use(express.json());
// credentials:true meaning -> server allows a browser
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);
app.use(clerkMiddleware()) // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat",chatRoutes)
app.use("/api/sessions",sessionRoutes)
app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "success from api",
  });
});

// when you pass an array of middleware to express, it automatically flattens and executes them sequentially one by one

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(clientPath));

  // SPA fallback (Node 22 + Express safe)
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}


const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`server is running in ${ENV.PORT} port`);
    });
  } catch (error) {
    console.error("Error starting in server", error);
  }
};
startServer();
