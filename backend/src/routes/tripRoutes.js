import express from "express";
import { getTrips,  getTripById, createTrip,} from "../controllers/tripController.js";

const router = express.Router();

router.get("/trips", getTrips);
router.get("/trips/:id", getTripById);
router.post("/trips", createTrip);

export default router;