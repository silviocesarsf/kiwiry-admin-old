import express from "express"
import registerRoute from "./routes/auth/register"
import loginRoute from "./routes/auth/login"
import verifyEmail from "./routes/auth/verify-email";
import cors from "cors";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/verify-email", verifyEmail);

export default app;