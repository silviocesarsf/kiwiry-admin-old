import { Router } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
const router = Router();

router.post("/", async (req, res) => {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
        res.status(400).json({ error: "Campos insuficientes" });
        return;
    }

    const reset = await prisma.passwordResetToken.findUnique({
        where: { token },
        include: { user: true }
    });

    if (!reset || reset.expires_at < new Date()) {
        res.status(400).json({ error: "Token inválido ou expirado" });
        return;
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.$transaction([
        prisma.user.update({
            where: { user_id: reset.user_id },
            data: {
                password_hash: passwordHash
            }
        }),
        prisma.passwordResetToken.delete({ where: { token } })
    ]);

    res.json({ message: "Senha alterada com sucesso" });
});

export default router;