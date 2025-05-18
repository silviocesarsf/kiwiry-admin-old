import express from "express"
import registerRoute from "./routes/auth/register"
import loginRoute from "./routes/auth/login"

const app = express();
app.use(express.json());

app.use("/register", registerRoute);
app.use("/login", loginRoute);

export default app;