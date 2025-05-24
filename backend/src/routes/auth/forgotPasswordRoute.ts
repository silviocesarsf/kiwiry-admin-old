import { Router } from "express";
import { sendResetPasswordToken } from "../../services/email-service";
import crypto from "crypto";
import { prisma } from "../../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Email não informado" });
        return;
    }

    const user = await prisma.user.findFirst({
        where: { email }
    });

    if (!user) {
        res.status(404).json({ error: "Usuário nao encontrado" });
        return;
    }

    const token = crypto.randomBytes(4).toString("hex");
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 15);

    await prisma.passwordResetToken.create({
        data: {
            token,
            user_id: user.user_id,
            expires_at: expires
        }
    });

    await sendResetPasswordToken("", token);
    res.status(200).json({ message: "Instruções enviadas para o e-mail." });
});

export default router;