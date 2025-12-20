import express from "express";

const app = express();
app.use(express.json({ limit: "10mb" })); // Adjust limit based on your requirements

export default app;
