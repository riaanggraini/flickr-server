import express from "express";
import helmet from "helmet";
import cors from "cors";
import { v1Routes } from "./routes";

const app = express();

app.use(cors());
app.use(helmet());

app.enable("trust proxy");

app.use("/api/v1/", v1Routes);

process.on("uncaughtException", (err) => {
  console.log(err, 'Uncaught exception'); // eslint-disable-line
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log({  // eslint-disable-line
        promise,
        reason,
    }, "unhandledRejection");
    process.exit(1);
});


export default app;
