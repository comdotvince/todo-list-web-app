import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodbConnect.js";
import todoRoutes from "./routes/todoRoute.js";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Magic happening at http://localhost:${PORT}`);
});
