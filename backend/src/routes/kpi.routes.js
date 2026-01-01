import express from "express";
import { getKPIs } from "../controllers/kpi.controller.js";

const router = express.Router();

router.get("/", getKPIs);

export default router;
