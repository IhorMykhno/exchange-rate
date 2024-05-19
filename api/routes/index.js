import { Router } from "express";
import { Rate } from "../controllers/rate.controller";
import { SubscriptionController } from "../controllers/subscription.controller";

const router = Router();

router.get("/rate", Rate.getRate);

router.post("/subscribe", SubscriptionController.subscribeUser);

export default router;
