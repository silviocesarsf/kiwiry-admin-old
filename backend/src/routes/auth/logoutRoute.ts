import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.clearCookie("token", {
        // httpOnly: true
        secure: true,
        sameSite: "lax"
    });

    res.status(200).json({ message: "Deslogado com sucesso" });
});

export default router;