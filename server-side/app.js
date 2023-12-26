import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import OrderRoutes from "./routes/OrderRoutes.js"

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/order", OrderRoutes)

export default app;
