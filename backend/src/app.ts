import express from "express"
import registerRoute from "./routes/auth/registerRoute"
import loginRoute from "./routes/auth/loginRoute"
import verifyEmailRoute from "./routes/auth/verifyEmailRoute";
import meRoute from "./routes/me"
import logoutRoute from "./routes/auth/logoutRoute"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/verify-email", verifyEmailRoute);
app.use("/api/me", meRoute);
app.use("/api/logout", logoutRoute);

export default app;