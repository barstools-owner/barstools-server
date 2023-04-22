import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/* SERVER ENTRY POINT */
const PORT = process.env.PORT || 9000;
const DOMAIN = process.env.DOMAIN || "localhost";
app.listen(PORT, () => {
  console.log(`Barstools server listening on http://${DOMAIN}:${PORT}`);
});
