import { Router } from "express";

const authRouter = Router();

authRouter.get("/sign-up", function (req, res) {
    res.send({ title: "Sign Up Page" });
});
authRouter.get("/sign-in", function (req, res) {
    res.send({ title: "Sign In Page" });
});
authRouter.get("/sign-out", function (req, res) {
    res.send({ title: "Sign Out Page" });
});

export default authRouter;
