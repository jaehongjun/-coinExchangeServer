import express from "express";
import { join } from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";
import apiRouter from "./routes/apiRouter";

const PORT = "4000";
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use("/static", express.static(join(__dirname, "static")));
app.use(routes.api, apiRouter);
app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
