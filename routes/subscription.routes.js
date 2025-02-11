import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    // TODO: Implement subscription logic here
    res.status(200).json({
        message: "Get all subscriptions",
    });
});
subscriptionRouter.get("/:id", (req, res) => {
    res.status(200).json({
        message: `Get subscription with id`,
    });
});

subscriptionRouter.post("/", (req, res) => {
    res.status(201).json({
        message: `Create a new subscription`,
    });
});

subscriptionRouter.put("/:id", (req, res) => {
    res.status(200).json({
        message: `Update subscription with id`,
    });
});
subscriptionRouter.delete("/:id", (req, res) => {
    res.status(200).json({
        message: `Delete subscription with id`,
    });
});

subscriptionRouter.get("/user/:id", (req, res) => {
    res.status(200).json({
        message: `Get subscriptions for user with id`,
    });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.status(200).json({
        message: `Cancel subscription with id`,
    });
});

subscriptionRouter.put("/upcoming-renewals", (req, res) => {
    res.status(200).json({
        message: "Get upcoming renewals",
    });
});

export default subscriptionRouter;
