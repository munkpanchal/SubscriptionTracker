import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error(
        "DB_URI not defined in .env.<development/production>.local variables."
    );
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(
            `Connected to the database in ${NODE_ENV} mode successfully.`
        );
    } catch (error) {
        console.error(
            "Failed to connect to the database:",
            error
        );
        process.exit(1);
    }
};

export default connectToDatabase;
