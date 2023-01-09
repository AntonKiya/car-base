import express from "express";
import cors from "cors";
import { config } from "dotenv";
import swaggerUI from "swagger-ui-express";
import { launchConnectors } from "@connectors";
const { swaggerDoc } = require("@configs");
import carRoutes from "./routes/car-routes/car.routes";

const app: express.Application = express();

const port: number = process.env.PORT ? +process.env.PORT : 5000;
const prefix: string = process.env.API_PREFIX ? process.env.API_PREFIX : "api";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config();

app.use(`/${prefix}/car/`, carRoutes);
app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

launchConnectors().then(() => {
  app.listen(port, () => {
    console.log(`car-base Started on port ${port}`);
  });
});
