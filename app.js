import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", async (req, res) => {
    res.send(
        "Welcome to the Subscription Tracker Node.js & Express API!"
    );
    await connectToDatabase();
});

app.listen(PORT, () => {
    console.log(
        `Server is running on port http://localhost:${PORT}`
    );
});
