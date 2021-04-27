import { Router } from "express";
import imagesRoutes from "./images";

const routes = Router();

imagesRoutes(routes);

export default routes;
