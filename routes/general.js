import express from "express";
import { getFahrzeuge, getFahrer, fahrerAdd, fahrzeugeAdd, fahrten, fahrtenAdd, fahrzeugeDelete, fahrerDelete } from "../controllers/general.js";

const router = express.Router();

router.get("/fahrer", getFahrer);
router.post("/fahrer-add", fahrerAdd);
router.delete("/fahrer-delete/:_id", fahrerDelete);
router.get("/fahrzeuge", getFahrzeuge);
router.post("/fahrzeuge-add", fahrzeugeAdd);
router.delete("/fahrzeuge-delete/:id", fahrzeugeDelete);
router.get("/fahrten", fahrten);
router.post("/fahrten-add", fahrtenAdd);

export default router;